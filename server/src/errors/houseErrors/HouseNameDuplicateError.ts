import { FieldError } from "../../types/errors/FieldError";

export const HouseNameDuplicateError: FieldError = {
    field: 'houseName',
    message: 'The already is another house with with that name.',
    code: 3,
};