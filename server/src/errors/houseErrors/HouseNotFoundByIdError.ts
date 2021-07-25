import { FieldError } from "../../types/errors/FieldError";

export const HouseNotFoundByIdError: FieldError = {
    field: 'houseId',
    message: 'That house is uninhabited or the owner moved out.',
    code: 2,
};