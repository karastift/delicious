import { FieldError } from "../types/responses/errors/FieldError";
import { RegisterInput } from "../types/inputs/RegisterInput";

export const validateRegister = (input: RegisterInput): FieldError | undefined => {

    if (!input.houseName.match(/^[a-zA-Z0-9]+$/)) return { field: 'houseName', message: 'The name of your house can only include letters and numbers.' };

    if (input.houseName?.length < 3) return { field: 'houseName', message: 'The name of the house has to have at least 4 characters.' };

    if (input.password?.length < 5) return { field: 'password', message: 'The password has to have at least 4 characters.' };

    return undefined;
};