import { Field, InputType } from "type-graphql";

@InputType()
export class LoginInput {
    @Field(() => String)
    houseName: string;
    @Field(() => String)
    password: string;
}