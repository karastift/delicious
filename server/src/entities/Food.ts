import { Field, Int, ObjectType } from "type-graphql";
import { Entity, BaseEntity, Column, CreateDateColumn, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { House } from "./House";
import { Member } from "./Member";
import { Wish } from "./Wish";

@ObjectType()
@Entity()
export class Food extends BaseEntity {

    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id!: number;

    @Field(() => String)
    @Column()
    foodName: string;

    @Field(() => String, { nullable: true })
    @Column()
    description: string;

    @Field(() => String, { nullable: true })
    @Column()
    recipeLink: string;

    @OneToMany(() => Wish, (wish) => wish.food)
    wishes: Wish[];

    @Field(() => Int)
    @Column()
    creatorId: number;

    @Field(() => Member)
    @ManyToOne(() => Member, (member) => member.food)
    creator: Member;

    @Column()
    houseId: number;

    @Field()
    @ManyToOne(() => House, (house) => house.foods)
    house: House;

    @Field(() => String)
    @CreateDateColumn()
    createdAt: Date;
}