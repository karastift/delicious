import { FieldError } from "../../types/errors/FieldError";

export const HouseNameTooShortError: FieldError = {
    field: 'houseName',
    message: 'The name of the house has to have at least 4 characters.',
    code: 11,
};