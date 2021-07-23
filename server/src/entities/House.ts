import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, BaseEntity, OneToMany } from "typeorm";
import { Field, Int, ObjectType } from "type-graphql";
import { Wish } from "./Wish";
import { Food } from "./Food";

@ObjectType()
@Entity()
export class House extends BaseEntity{

    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id!: number;

    @Field(() => String)
    @Column({ unique: true })
    name!: string;

    @Column()
    password!: string;

    @Field(() => [Wish], { nullable: true })
    @OneToMany(() => Wish, (wish) => wish.house)
    wishes: Wish[]

    @Field(() => [Food], { nullable: true })
    @OneToMany(() => Food, (food) => food.house)
    foods: Food[]

    @Field(() => String)
    @CreateDateColumn()
    createdAt: Date;
}