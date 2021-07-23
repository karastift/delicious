import { Migration } from '@mikro-orm/migrations';

export class Migration20210723101701 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "food" ("id" serial primary key, "food_name" varchar(255) not null, "description" varchar(255) not null, "recipe_link" varchar(255) not null, "created_at" timestamptz(0) not null);');

    this.addSql('create table "wish" ("id" serial primary key, "food_id" int4 not null, "day" timestamptz(0) not null, "created_at" timestamptz(0) not null);');
  }

}
