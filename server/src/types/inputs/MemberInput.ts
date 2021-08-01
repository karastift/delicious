import { Field, InputType } from "type-graphql";

@InputType()
export class MemberInput {
	@Field(() => String)
	memberName: string;
	@Field(() => String)
	role: string;
}