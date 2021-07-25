import { FieldError } from "../../types/errors/FieldError";

export const DuplicateFoodError: FieldError = {
    field: 'foodName',
    message: 'You already have a food with that name.',
    code: 8,
};