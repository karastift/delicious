import argon2 from 'argon2';
import { validateRegister } from "../validations/validateRegister";
import { Arg, Ctx, FieldResolver, Mutation, Query, Resolver, Root } from "type-graphql";
import { RegisterInput } from "../types/inputs/RegisterInput";
import { HouseResponse } from "../types/responses/HouseResponse";
import { MyContext } from "../types/MyContext";
import { House } from '../entities/House';
import { LoginInput } from '../types/inputs/LoginInput';
import { cookieName } from '../constants';
import { Food } from '../entities/Food';
import { Wish } from '../entities/Wish';


@Resolver(House)
export class HouseResolver {

    @FieldResolver(() => [Food], { nullable: true })
    foods(
        @Root() house: House,
        @Ctx() { req }: MyContext,
    ): Promise<Food[] | undefined> | undefined {
        if (!house.private || req.session.houseId === house.id) return Food.find({ where: { houseId: house.id } });
        return undefined;
    }

    @FieldResolver(() => [Wish], { nullable: true })
    wishes(
        @Root() house: House,
        @Ctx() { req }: MyContext,
    ): Promise<Wish[] | undefined> | undefined {
        if (!house.private || req.session.houseId === house.id) return Wish.find({ where: { houseId: house.id } });
        return undefined;
    }

    @Query(() => House, { nullable: true })
    myHouse(
        @Ctx() { req }: MyContext,
    ): Promise<House | undefined> | null {
        const { houseId } = req.session;
        if (!houseId) return null;
        return House.findOne({ where: { id: houseId } });
    }

    @Query(() => House, { nullable: true })
    async houseById(
        @Arg('id') id: number,
    ): Promise<House | undefined> {
        const house = await House.findOne({ where: { id } });
        if (!house) return undefined;
        return house;
    }

    @Mutation(() => HouseResponse)
    async register(
        @Arg('input') input: RegisterInput,
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
            return {
                error: {
                    field: 'houseName',
                    message: 'The already is another house with with that name.',
                },
            };
        }

        req.session.houseId = house.id;

        return { house };
    }

    @Mutation(() => HouseResponse)
    async login(
        @Arg('input') input: LoginInput,
        @Ctx() { req }: MyContext,
    ): Promise<HouseResponse> {
        
        const house = await House.findOne({ where: { name: input.houseName } });

        if (!house) return {
            error: {
                field: 'houseName',
                message: 'Could not find any house with that name.',
            },
        };

        const isPasswordValid = await argon2.verify(house.password, input.password);

        if (!isPasswordValid) return {
            error: {
                field: 'password',
                message: 'Your password is not correct.',
            },
        };

        req.session.houseId = house.id;

        return { house }
    }

    @Mutation(() => Boolean)
    logout(
        @Ctx() { req, res }: MyContext,
    ) {
        return new Promise(resolve => req.session.destroy(err => {
            res.clearCookie(cookieName);
            if (err) {
                console.log(err);
                resolve(false);
                return;
            }
            resolve(true);
        }));
    }
}