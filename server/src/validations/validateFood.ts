import { FieldError } from "../types/errors/FieldError";
import { FoodInput } from "../types/inputs/FoodInput";

export const validateFood = (input: FoodInput): FieldError | undefined => {
    if (input.foodName.length < 2) return {
        field: 'foodName',
        message: 'The name of you food has to have at least 2 characters.',
    };
    return undefined;
};