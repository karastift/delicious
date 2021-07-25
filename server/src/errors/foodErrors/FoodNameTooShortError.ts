import { FieldError } from "../../types/errors/FieldError";

export const FoodNameTooShortError: FieldError = {
    field: 'foodName',
    message: 'The name of you food has to have at least 2 characters.',
    code: 13,
};