import { Food } from '../entities/Food';
import { Query, Resolver } from "type-graphql";

@Resolver(Food)
export class FoodResolver {

    @Query(() => [Food])
    foods(
    ): Promise<Food[]> {

        return Food.find({});
    }
}