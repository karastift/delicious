import { Wish } from "../../entities/Wish";
import { Field, ObjectType } from "type-graphql";
import { FieldError } from "../errors/FieldError";

@ObjectType()
export class WishResponse {
    @Field(() => Wish, { nullable: true })
    wish?: Wish;
    @Field(() => FieldError, { nullable: true })
    error?: FieldError;
}