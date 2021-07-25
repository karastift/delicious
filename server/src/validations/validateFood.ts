import { FoodNameTooShortError } from "../errors/foodErrors/FoodNameTooShortError";
import { FieldError } from "../types/errors/FieldError";
import { FoodInput } from "../types/inputs/FoodInput";

export const validateFood = (input: FoodInput): FieldError | undefined => {
    if (input.foodName.length < 2) return FoodNameTooShortError;
    return undefined;
};