import { Food } from '../entities/Food';
import { Arg, Ctx, FieldResolver, Int, Mutation, Query, Resolver, Root, UseMiddleware } from "type-graphql";
import { isAuthenticated } from '../middleware/isAuthenticated';
import { FoodResponse } from '../types/responses/FoodResponse';
import { House } from '../entities/House';
import { MultipleFoodsResponse } from '../types/responses/MultipleFoodsResponse';
import { FoodInput } from '../types/inputs/FoodInput';
import { validateFood } from '../validations/validateFood';
import { UpdateFoodInput } from '../types/inputs/UpdateFoodInput';
import { FoodNotFoundByIdError } from '../errors/foodErrors/FoodNotFoundByIdError';
import { FoodNotFoundByNameError } from '../errors/foodErrors/FoodNotFoundByNameError';
import { MyContext } from '../types/MyContext';
import { HouseNotFoundByIdError } from '../errors/houseErrors/HouseNotFoundByIdError';
import { PrivateHouseError } from '../errors/houseErrors/PrivateHouseError';
import { DuplicateFoodError } from '../errors/foodErrors/DuplicateFoodError';

@Resolver(Food)
export class FoodResolver {

    @FieldResolver(() => House, { nullable: true })
    async house(
        @Root() food: Food,
    ): Promise<House | undefined> {
        const house = await House.findOne(food.houseId);

        return house;
    }

    @Query(() => [Food])
    allFoods(): Promise<Food[]> {
        return Food.find({});
    }

    @UseMiddleware(isAuthenticated)
    @Query(() => FoodResponse)
    async foodById(
        @Arg('foodId', () => Int) foodId: number,
    ): Promise<FoodResponse> {
        const food = await Food.findOne(foodId);
        if (!food) return { error: FoodNotFoundByIdError };

        return { food };
    }

    @UseMiddleware(isAuthenticated)
    @Query(() => MultipleFoodsResponse)
    async foodByName(
        @Arg('foodName', () => String) foodName: string,
    ): Promise<MultipleFoodsResponse> {
        const foods = await Food.find({ where: { foodName } });
        if (!foods.length) return { error: FoodNotFoundByNameError };

        return { foods };
    }

    @UseMiddleware(isAuthenticated)
    @Query(() => MultipleFoodsResponse)
    async foodForHouseById(
        @Arg('houseId', () => Int) houseId: number,
        @Ctx() { req }: MyContext,
    ): Promise<MultipleFoodsResponse> {
        const house = await House.findOne(houseId);
        if (!house) return { error: HouseNotFoundByIdError };
        if (house.private && house.id !== req.session.houseId) return { error: PrivateHouseError };

        return { foods: await Food.find({ where: { houseId } }) };
    }

    @UseMiddleware(isAuthenticated)
    @Mutation(() => FoodResponse)
    async createFood(
        @Arg('foodInput', () => FoodInput) foodInput: FoodInput,
        @Ctx() { req }: MyContext,
    ): Promise<FoodResponse> {
        const error = validateFood(foodInput);
        if (error) return { error };
        
        const existingFoodInHouseWithSameName = await Food.count({ where: { foodName: foodInput.foodName, houseId: req.session.houseId } });
        if (existingFoodInHouseWithSameName) return { error: DuplicateFoodError };

        return {
            food: await Food.create({
                houseId: req.session.houseId,
                ...foodInput,
            }).save(),
        };
    }

    @UseMiddleware(isAuthenticated)
    @Mutation(() => Boolean)
    async deleteFood(
        @Arg('foodId', () => Int) foodId: number,
        @Ctx() { req }: MyContext,
    ): Promise<boolean> {
        try {
            await Food.delete({ id: foodId, houseId: req.session.houseId });
            return true;
        }
        catch {
            return false;
        }
    }

    @UseMiddleware(isAuthenticated)
    @Mutation(() => FoodResponse)
    async updateFood(
        @Arg('foodInput', () => UpdateFoodInput) foodInput: UpdateFoodInput,
        @Ctx() { req }: MyContext,
    ): Promise<FoodResponse> {
        const food = await Food.count({ id: foodInput.foodId, houseId: req.session.houseId });
        
        if (!food) return { error: FoodNotFoundByIdError };
        const { foodId, ...updateInput} = foodInput;
        Food.update(
            { id: foodInput.foodId, houseId: req.session.houseId },
            updateInput,
        );

        return { food: await Food.findOne(foodId) };
    }
}