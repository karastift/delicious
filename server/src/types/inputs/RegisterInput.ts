import { Field, InputType } from "type-graphql";

@InputType()
export class RegisterInput {
    @Field()
    houseName: string;
    @Field()
    password: string;
    @Field()
    private: boolean;
}