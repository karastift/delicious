import argon2 from 'argon2';
import { validateRegister } from "../validations/validateRegister";
import { Arg, Ctx, FieldResolver, Mutation, Query, Resolver, Root, UseMiddleware } from "type-graphql";
import { RegisterInput } from "../types/inputs/RegisterInput";
import { HouseResponse } from "../types/responses/HouseResponse";
import { MyContext } from "../types/MyContext";
import { House } from '../entities/House';
import { LoginInput } from '../types/inputs/LoginInput';
import { Food } from '../entities/Food';
import { Wish } from '../entities/Wish';
import { UpdateHouseInput } from '../types/inputs/UpdateHouseInput';
import { isAuthenticated } from '../middleware/isAuthenticated';
import { HouseNotFoundByNameError } from '../errors/houseErrors/HouseNotFoundByNameError';
import { HouseNotFoundByIdError } from '../errors/houseErrors/HouseNotFoundByIdError';
import { HouseNameDuplicateError } from '../errors/houseErrors/HouseNameDuplicateError';
import { IncorrectPasswordError } from '../errors/houseErrors/IncorrectPasswordError';
import { Member } from '../entities/Member';

@Resolver(House)
export class HouseResolver {

    @FieldResolver(() => [Food], { nullable: true })
    foods(
        @Root() house: House,
        @Ctx() { req }: MyContext,
    ): Promise<Food[] | undefined> | undefined {
        if (!house.private || req.session.houseId === house.id) return Food.find({ where: { houseId: house.id } }); // createFoodLoader like UserLoader in socialschool
        return undefined;
    }

    @FieldResolver(() => [Wish], { nullable: true })
    wishes(
        @Root() house: House,
        @Ctx() { req }: MyContext,
    ): Promise<Wish[] | undefined> | undefined {
        if (!house.private || req.session.houseId === house.id) return Wish.find({ where: { houseId: house.id } }); // createFoodLoader like UserLoader in socialschoo
        return undefined;
    }

    @FieldResolver(() => [Member])
    members(
        @Root() { id: houseId }: House,
    ): Promise<Member[]> {
        return Member.find({ where: { houseId } });
    }

    @Query(() => HouseResponse)
    async houseByName(
        @Arg('houseName', () => String) houseName: string,
    ): Promise<HouseResponse> {
        const house = await House.findOne({ where: { name: houseName } });
        if (!house) return { error: HouseNotFoundByNameError };

        return { house };
    }

    // @UseMiddleware(isAuthenticated)
    // @Query(() => [House], { nullable: true })
    // allHouses(): Promise<House[]> {
    //     return House.find({});
    // }

    @UseMiddleware(isAuthenticated)
    @Query(() => HouseResponse, { nullable: true })
    async myHouse(
        @Ctx() { req }: MyContext,
    ): Promise<HouseResponse | null> {
        const { houseId } = req.session;
        if (!houseId) return null;
        return { house: await House.findOne({ where: { id: houseId } }) };
    }

    @UseMiddleware(isAuthenticated)
    @Query(() => HouseResponse, { nullable: true })
    async houseById(
        @Arg('id') id: number,
    ): Promise<HouseResponse> {
        const house = await House.findOne({ where: { id } });
        if (!house) return { error: HouseNotFoundByIdError };

        return { house };
    }

    @Mutation(() => HouseResponse)
    async register(
        @Arg('input', () => RegisterInput) input: RegisterInput,
        @Ctx() { req }: MyContext
    ): Promise<HouseResponse> {
        const error = validateRegister(input);
        if (error) return { error };
        
        const password = await argon2.hash(input.password);
        
        let house: House;
        
        try {
            house = await House.create({
                name: input.houseName,
                password,
                private: input.private,
            }).save();
        }
        catch (err) {
            return { error: HouseNameDuplicateError };
        }

        req.session.houseId = house.id;

        return { house };
    }

    @UseMiddleware(isAuthenticated)
    @Mutation(() => HouseResponse)
    async updateMyHouse(
        @Arg('input', () => UpdateHouseInput) input: UpdateHouseInput,
        @Ctx() { req }: MyContext,
    ): Promise<HouseResponse> {

        const count = await House.count({ where: { id: req.session.houseId } });
        if (!count) return { error: HouseNotFoundByIdError };
        
        try {
            await House.update({ id: req.session.houseId }, {
                name: input.houseName,
                private: input.private,
            });
            return { house: await House.findOne(req.session.houseId) };
        }
        catch {
            return { error: HouseNameDuplicateError };
        }
    }

    @UseMiddleware(isAuthenticated)
    @Mutation(() => Boolean)
    async deleteMyHouse(
        @Ctx() { req }: MyContext,
    ) {
        try {
            await House.delete({ id: req.session.houseId });
            return true;
        }
        catch {
            return false;
        }
    }

    @Mutation(() => HouseResponse)
    async login(
        @Arg('input', () => LoginInput) input: LoginInput,
        @Ctx() { req }: MyContext,
    ): Promise<HouseResponse> {
        
        const house = await House.findOne({ where: { name: input.houseName } });

        if (!house) return { error: HouseNotFoundByNameError };

        const isPasswordValid = await argon2.verify(house.password, input.password);

        if (!isPasswordValid) return { error: IncorrectPasswordError };

        req.session.houseId = house.id;

        return { house }
    }

    @Mutation(() => Boolean)
    logout(
        @Ctx() { req, res }: MyContext,
    ) {
        return new Promise(resolve => req.session.destroy(err => {
            res.clearCookie(process.env.COOKIE_NAME);
            if (err) {
                console.log(err);
                resolve(false);
                return;
            }
            resolve(true);
        }));
    }

    // admin queries/mutations
}