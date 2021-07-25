import { Food } from "../../entities/Food";
import { Field, ObjectType } from "type-graphql";
import { FieldError } from "../errors/FieldError";

@ObjectType()
export class FoodResponse {
    @Field(() => Food, { nullable: true })
    food?: Food;
    @Field(() => FieldError, { nullable: true })
    error?: FieldError;
}