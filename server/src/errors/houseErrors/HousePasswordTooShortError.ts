import { FieldError } from "../../types/errors/FieldError";

export const HousePasswordTooShortError: FieldError = {
    field: 'password',
    message: 'The name of the house has to have at least 5 characters.',
    code: 12,
};