import { Food } from "../../entities/Food";
import { Field, ObjectType } from "type-graphql";
import { FieldError } from "./errors/FieldError";

@ObjectType()
export class MultipleFoodsResponse {
    @Field(() => [Food], { nullable: true })
    foods?: Food[];
    @Field(() => FieldError, { nullable: true })
    error?: FieldError;
}