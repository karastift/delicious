import { HouseNameInvalidSignsError } from "../errors/houseErrors/HouseNameInvalidSignsError";
import { HouseNameTooShortError } from "../errors/houseErrors/HouseNameTooShortError";
import { HousePasswordTooShortError } from "../errors/houseErrors/HousePasswordTooShortError";
import { FieldError } from "../types/errors/FieldError";
import { RegisterInput } from "../types/inputs/RegisterInput";

export const validateRegister = (input: RegisterInput): FieldError | undefined => {

    if (!input.houseName.match(/^[a-zA-Z0-9]+$/)) return HouseNameInvalidSignsError;

    if (input.houseName?.length < 3) return HouseNameTooShortError;

    if (input.password?.length < 5) return HousePasswordTooShortError;

    return undefined;
};