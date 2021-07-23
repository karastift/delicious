import { Food } from '../entities/Food';
import { Query, Resolver } from "type-graphql";

@Resolver(Food)
export class FoodResolver {

    @Query(() => [Food])
    foods(
    ): Promise<Food[]> {

        return Food.find({});
    }
    // food by name
    // food for house (would be a duplicate)
    // createFood
    // deleteFood
    // updateFood
}