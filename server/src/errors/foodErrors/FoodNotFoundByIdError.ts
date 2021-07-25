import { FieldError } from "../../types/errors/FieldError";

export const FoodNotFoundByIdError: FieldError = {
    field: 'foodId',
    message: 'There is no food with that id. Maybe it was deleted.',
    code: 5,
};