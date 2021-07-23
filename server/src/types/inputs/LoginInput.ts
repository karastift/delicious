import { Field, InputType } from "type-graphql";

@InputType()
export class LoginInput {
    @Field()
    houseName: string;
    @Field()
    password: string;
}