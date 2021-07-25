import { Field, InputType, Int } from "type-graphql";
import { WishInput } from "./WishInput";

@InputType()
export class UpdateWishInput extends WishInput{
    @Field(() => Int)
    wishId: number;
}