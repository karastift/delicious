import { House } from "../../entities/House";
import { ObjectType, Field } from "type-graphql";
import { FieldError } from "../errors/FieldError";

@ObjectType()
export class HouseResponse {
    @Field(() => FieldError, { nullable: true })
    error?: FieldError;
    @Field(() => House, { nullable: true })
    house?: House;
}