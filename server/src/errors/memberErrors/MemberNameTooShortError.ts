import { FieldError } from "../../types/errors/FieldError";

export const MemberNameTooShortError: FieldError = {
	field: 'memberName',
	message: 'The name is too short.',
	code: 15,
};