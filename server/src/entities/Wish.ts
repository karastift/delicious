import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, BaseEntity, ManyToOne } from "typeorm";
import { Field, Int, ObjectType } from "type-graphql";
import { House } from "./House";
import { Food } from "./Food";

@ObjectType()
@Entity()
export class Wish extends BaseEntity{

    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id!: number;

    @Field(() => Int)
    @Column()
    foodId!: number;
    
    @Field(() => Food)
    @ManyToOne(() => Food, (food) => food.wishes)
    food: Food;

    @Field(() => Int)
    @Column()
    houseId: number;

    @Field(() => House)
    @ManyToOne(() => House, (house) => house.wishes)
    house: House;

    @Field(() => String)
    @Column()
    day: Date;

    @Field(() => String)
    @CreateDateColumn()
    createdAt: Date;
}