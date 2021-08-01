import { Field, ObjectType } from "type-graphql";
import { Member } from "../../entities/Member";
import { FieldError } from "../errors/FieldError";

@ObjectType()
export class MultipleMembersResponse {
    @Field(() => [Member], { nullable: true })
    members?: Member[];
    @Field(() => FieldError, { nullable: true })
    error?: FieldError;
}