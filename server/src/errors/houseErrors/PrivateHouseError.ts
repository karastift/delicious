import { FieldError } from "../../types/errors/FieldError";

export const PrivateHouseError: FieldError = {
    field: 'houseId',
    message: 'This house is closed.',
    code: 7,
};