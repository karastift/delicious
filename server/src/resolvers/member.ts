import { House } from "../entities/House";
import { Member } from "../entities/Member";
import { FieldResolver, Resolver, Root } from "type-graphql";

@Resolver(Member)
export class MemberResolver {
  @FieldResolver(() => House)
  house(
    @Root() member: Member,
  ): Promise<House | undefined> {
    return House.findOne(member.houseId);
  }

  // create member

  // get member by id

  // (get member by name and houseId)

  // get created food

  // get assigned wishes

  // get created wishes
}