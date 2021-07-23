import { Query, Resolver } from "type-graphql";

@Resolver()
export class ChickenNuggetsResolver {

    @Query(() => String)
    chickenNuggets() {
        return 'Chicken Nuggets '.repeat(10);
    }
}