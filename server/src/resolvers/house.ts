import argon2 from 'argon2';
import { validateRegister } from "../validations/validateRegister";
import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import { RegisterInput } from "../types/inputs/RegisterInput";
import { HouseResponse } from "../types/responses/HouseResponse";
import { MyContext } from "../types/MyContext";
import { House } from '../entities/House';
import { LoginInput } from '../types/inputs/LoginInput';

@Resolver()
export class HouseResolver {

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
}