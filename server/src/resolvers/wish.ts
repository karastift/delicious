import { Wish } from '../entities/Wish';
import { Arg, Ctx, FieldResolver, Int, Mutation, Query, Resolver, Root, UseMiddleware } from 'type-graphql';
import { WishResponse } from '../types/responses/WishResponse';
import { MyContext } from '../types/MyContext';
import { WishNotFoundByIdError } from '../errors/wishErrors/WishNotFoundByIdError';
import { Raw } from 'typeorm';
import { MultipleWishesResponse } from '../types/responses/MultipleWishesReponse';
import { isAuthenticated } from '../middleware/isAuthenticated';
import { House } from '../entities/House';
import { HouseNotFoundByIdError } from '../errors/houseErrors/HouseNotFoundByIdError';
import { PrivateHouseError } from '../errors/houseErrors/PrivateHouseError';
import { WishInput } from '../types/inputs/WishInput';
import { validateWish } from '../validations/validateWish';
import { Food } from '../entities/Food';
import { FoodNotFoundByIdError } from '../errors/foodErrors/FoodNotFoundByIdError';
import { UpdateWishInput } from '../types/inputs/UpdateWishInput';

@Resolver(Wish)
export class WishResolver {

    @FieldResolver(() => House)
    house(
        @Root() wish: Wish,
    ) {
        return House.findOne(wish.houseId);
    }

    @FieldResolver(() => House)
    food(
        @Root() wish: Wish,
    ) {
        return Food.findOne(wish.foodId);
    }

    @UseMiddleware(isAuthenticated)
    @Query(() => WishResponse)
    async wishById(
        @Arg('wishId', () => Int) wishId: number,
        @Ctx() { req } : MyContext,
    ): Promise<WishResponse> {
        const wish = await Wish.findOne({ where: { id: wishId, houseId: req.session.houseId } });
        if (!wish) return { error:  WishNotFoundByIdError };

        return { wish }
    }

    @UseMiddleware(isAuthenticated)
    @Query(() => MultipleWishesResponse)
    async myWishesForTimespan(
        @Arg('startTime', () => String) startTime: Date,
        @Arg('endTime', () => String) endTime: Date,
        @Ctx() { req } : MyContext,
    ): Promise<MultipleWishesResponse> {
        const wishes = await Wish.find({
            where: {
                houseId: req.session.houseId,
                time: Raw((alias) =>`${alias} >= :startTime AND ${alias} <= :endTime`, { startTime, endTime }),
            },
        });
        
        return { wishes };
    }

    @UseMiddleware(isAuthenticated)
    @Query(() => MultipleWishesResponse)
    async wishesForHouse(
        @Arg('houseId', () => Int) houseId: number,
        @Ctx() { req }: MyContext,
    ): Promise<MultipleWishesResponse> {
        const house = await House.findOne(houseId);
        if (!house) return { error: HouseNotFoundByIdError };
        if (house.private && house.id !== req.session.houseId) return { error: PrivateHouseError };
 
        return { wishes: await Wish.find({ where: { houseId }}) };
    }

    @UseMiddleware(isAuthenticated)
    @Mutation(() => WishResponse)
    async createWish(
        @Arg('wishInput', () => WishInput) wishInput: WishInput,
        @Ctx() { req }: MyContext,
    ) {
        const error = validateWish(wishInput);
        if (error) return error;

        const food = await Food.count({ where: { id: wishInput.foodId } });
        if (!food) return { error: FoodNotFoundByIdError };

        const wish = await Wish.create({
            houseId: req.session.houseId,
            ...wishInput
        }).save();

        return { wish };
    }

    @UseMiddleware(isAuthenticated)
    @Mutation(() => WishResponse)
    async updateWish(
        @Arg('wishInput', () => UpdateWishInput) wishInput: UpdateWishInput,
        @Ctx() { req }: MyContext,
    ) {
        const error = validateWish(wishInput);
        if (error) return error;

        const wishCount = await Wish.count({ where: { id: wishInput.wishId, houseId: req.session.houseId } });
        if (!wishCount) return { error: WishNotFoundByIdError };

        const food = await Food.count({ where: { id: wishInput.foodId } });
        if (!food) return { error: FoodNotFoundByIdError };

        const { wishId, ...updateInput } = wishInput;

        await Wish.update(
            { id: wishInput.wishId, houseId: req.session.houseId },
            { ...updateInput },
        );

        return { wish: await Wish.findOne(wishId) };
    }

    @UseMiddleware(isAuthenticated)
    @Mutation(() => Boolean)
    async deleteWish(
        @Arg('wishId', () => Int) wishId: number,
        @Ctx() { req }: MyContext,
    ) {
        try {
            await Wish.delete({ id: wishId, houseId: req.session.houseId });
            return true;
        }
        catch {
            return false;
        }
    }
}