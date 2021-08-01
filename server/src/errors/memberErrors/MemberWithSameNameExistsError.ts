import { FieldError } from "../../types/errors/FieldError";

export const MemberWithSameNameExistsError: FieldError = {
	field: 'memberName',
	message: 'There already is a member with the same name.',
	code: 17,
};