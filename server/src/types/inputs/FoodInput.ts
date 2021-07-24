import { Field, InputType } from "type-graphql";

@InputType()
export class FoodInput {
    @Field(() => String)
    foodName: string;
    @Field(() => String, { nullable: true })
    description: string;
    @Field(() => String, { nullable: true })
    recipeLink: string;
}