import { FieldError } from "../../types/errors/FieldError";

export const MemberRoleInvalidError: FieldError = {
	field: 'role',
	message: 'Invalid role.',
	code: 16,
};