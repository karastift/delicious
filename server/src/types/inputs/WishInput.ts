import { Field, InputType, Int } from "type-graphql";

@InputType()
export class WishInput {
    @Field(() => Int)
    foodId: number;
    @Field(() => String)
    time: Date;
}