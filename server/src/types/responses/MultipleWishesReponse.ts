import { Field, ObjectType } from "type-graphql";
import { Wish } from "../../entities/Wish";
import { FieldError } from "../errors/FieldError";

@ObjectType()
export class MultipleWishesResponse {
    @Field(() => [Wish], { nullable: true })
    wishes?: Wish[];
    @Field(() => FieldError, { nullable: true })
    error?: FieldError;
};