import { FoodNotFoundByIdError } from "../errors/foodErrors/FoodNotFoundByIdError";
import { FieldError } from "../types/errors/FieldError";
import { WishInput } from "../types/inputs/WishInput";

export const validateWish = (input: WishInput): FieldError | undefined => {
    if (input.foodId < 0) return FoodNotFoundByIdError;

    return undefined;
};