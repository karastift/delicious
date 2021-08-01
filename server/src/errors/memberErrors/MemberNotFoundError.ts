import { FieldError } from "../../types/errors/FieldError";

export const MemberNotFoundByIdError: FieldError = {
    field: 'houseName',
    message: 'The member you search, does not exist',
    code: 18,
};