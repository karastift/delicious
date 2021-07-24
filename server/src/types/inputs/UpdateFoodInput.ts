import { Field, InputType, Int } from "type-graphql";
import { FoodInput } from "./FoodInput";

@InputType()
export class UpdateFoodInput extends FoodInput {
    @Field(() => Int)
    foodId: number;
}