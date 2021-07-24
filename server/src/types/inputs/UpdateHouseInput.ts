import { Field, InputType } from "type-graphql";

@InputType()
export class UpdateHouseInput {
    @Field(() => String)
    houseName!: string;

    @Field(() => Boolean)
    private!: boolean;
}