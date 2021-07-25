import { FieldError } from "../../types/errors/FieldError";

export const HouseNotFoundByNameError: FieldError = {
    field: 'houseName',
    message: 'The house with that name is uninhabited.',
    code: 1,
};