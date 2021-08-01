import { Field, Int, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Food } from "./Food";
import { House } from "./House";
import { Wish } from "./Wish";

@ObjectType()
@Entity()
export class Member extends BaseEntity {

  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field(() => String)
  @Column()
  memberName: string;

  @Field(() => String)
  @Column()
  role: string;

  @Field(() => Int)
  @Column({ unsigned: true, default: 0 })
  foodMadeCount: number;
  
  @Field(() => [Food], { nullable: true })
  @OneToMany(() => Food, (food) => food.creator) // creator can be any member from any house
  food: Food[];

  @Field(() => Wish, { nullable: true })
  @OneToMany(() => Wish, (wish) => wish.suggester) // suggester has to be a member in house
  wishes: Wish[];

  @Field(() => Wish, { nullable: true })
  @OneToMany(() => Wish, (wish) => wish.assigned) // suggester has to be a member in house
  assignedWishes: Wish[];

  @Column()
  houseId: number;

  @Field(() => House)
  @ManyToOne(() => House, (house) => house.members)
  house: House;
}