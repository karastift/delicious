import { Member } from "../../entities/Member";
import { Field, ObjectType } from "type-graphql";
import { FieldError } from "../errors/FieldError";

@ObjectType()
export class MemberResponse {
	@Field(() => Member, { nullable: true })
	member?: Member;
	@Field(() => FieldError, { nullable: true })
	error?: FieldError;
}