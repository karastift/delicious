import { ObjectType, Field, Int } from "type-graphql";

@ObjectType()
export class FieldError {
    @Field(() => String)
    field: string;
    @Field(() => String)
    message: string;
    @Field(() => Int)
    code: number;
}