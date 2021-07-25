import { FieldError } from "../../types/errors/FieldError";

export const WishNotFoundByIdError: FieldError = {
    field: 'wishId',
    message: 'Wish not found.',
    code: 14,
};