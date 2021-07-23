import { Query, Resolver } from "type-graphql";

@Resolver()
export class HelloResolver {

    @Query(() => String)
    chickenNuggets() {
        return 'Chicken Nuggets'.repeat(10);
    }
}