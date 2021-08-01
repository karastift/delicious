import { House } from "../entities/House";
import { Member } from "../entities/Member";
import { Arg, Ctx, FieldResolver, Int, Mutation, Query, Resolver, Root } from "type-graphql";
import { MemberInput } from "../types/inputs/MemberInput";
import { validateMember } from "../validations/validateMember";
import { MemberResponse } from "../types/responses/MemberResponse";
import { MyContext } from "../types/MyContext";
import { MemberWithSameNameExistsError } from "../errors/memberErrors/MemberWithSameNameExistsError";
import { MultipleFoodsResponse } from "../types/responses/MultipleFoodsResponse";
import { MemberNotFoundByIdError } from "../errors/memberErrors/MemberNotFoundError";
import { PrivateHouseError } from "../errors/houseErrors/PrivateHouseError";
import { MultipleMembersResponse } from "../types/responses/MultipleMembersResponse";

@Resolver(Member)
export class MemberResolver {
    @FieldResolver(() => House)
    house(
      @Root() member: Member,
    ): Promise<House | undefined> {
      return House.findOne(member.houseId);
    }

	@Query(() => MultipleMembersResponse, { nullable: true })
	async membersByHouseId(
		@Arg('houseId', () => Int) houseId: number,
		@Ctx() { req }: MyContext,
	): Promise<MultipleMembersResponse | void> {
		const { members, ...house }: any = await House.findOne(houseId, { relations: ['members'] });
		if (house.private && house.id !== req.session.houseId) return { error: PrivateHouseError };

		return { members };
	}

	@Query(() => MultipleFoodsResponse, { nullable: true } )
	async getCreatedFood(
		@Arg('memberId', () => Int) memberId: number,
		@Ctx() { req }: MyContext,
	): Promise<MultipleFoodsResponse> {
		
		const { house, food: foods, ...member }: any = await Member.findOne(memberId, { relations: ['house', 'food'] });
		if (!member || !house) return { error: MemberNotFoundByIdError };
		if (house.private && house.id !== req.session.houseId) return { error: PrivateHouseError };
		
		return { foods };
	}

	@Mutation(() => MemberResponse)
	async createMember(
		@Arg('memberInput') memberInput: MemberInput,
		@Ctx() { req }: MyContext,
	): Promise<MemberResponse> {
		const error = validateMember(memberInput);
		if (error) return { error };

		const existingMember = await Member.findOne({ where: { memberName: memberInput.memberName, houseId: req.session.houseId } });
		if (existingMember) return { error: MemberWithSameNameExistsError };

		return {
			member: await Member.create({
				...memberInput,
				houseId: req.session.houseId,
			}).save(),
		};
	}

    // get assigned wishes

    // get created wishes
}