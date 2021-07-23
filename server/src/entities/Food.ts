import { Field, Int, ObjectType } from "type-graphql";
import { Entity, BaseEntity, Column, CreateDateColumn, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { House } from "./House";
import { Wish } from "./Wish";

@ObjectType()
@Entity()
export class Food extends BaseEntity {

    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id!: number;

    @Field(() => String)
    @Column({ unique: false })
    foodName!: string;

    @Field(() => String)
    @Column()
    description: string;

    @Field(() => String)
    @Column()
    recipeLink: string;

    @OneToMany(() => Wish, (wish) => wish.food)
    wishes: Wish[];

    @Field(() => Int)
    @Column()
    houseId: number;

    @Field()
    @ManyToOne(() => House, (house) => house.foods)
    house: House;

    @Field(() => String)
    @CreateDateColumn()
    createdAt: Date;
}