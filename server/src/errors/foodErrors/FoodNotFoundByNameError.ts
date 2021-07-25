import { FieldError } from "../../types/errors/FieldError";

export const FoodNotFoundByNameError: FieldError = {
    field: 'foodName',
    message: 'There is no food with that name.',
    code: 6,
};