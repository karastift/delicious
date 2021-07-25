import { FieldError } from "../../types/errors/FieldError";

export const HouseNameInvalidSignsError: FieldError = {
    field: 'houseName',
    message: 'The name of your house can only include letters and numbers.',
    code: 10,
};