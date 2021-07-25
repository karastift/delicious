import { FieldError } from "../../types/errors/FieldError";

export const IncorrectPasswordError: FieldError = {
    field: 'password',
    message: 'Your password is not correct.',
    code: 4,
};