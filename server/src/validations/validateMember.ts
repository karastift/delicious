import { MemberNameTooShortError } from "../errors/memberErrors/MemberNameTooShortError";
import { MemberRoleInvalidError } from "../errors/memberErrors/MemberRoleInvalidError";
import { FieldError } from "../types/errors/FieldError";
import { MemberInput } from "../types/inputs/MemberInput";

export const validateMember = (input: MemberInput): FieldError | undefined => {
	if (input.memberName.length < 2) return MemberNameTooShortError;
	if (!['child', 'adult'].includes(input.role)) return MemberRoleInvalidError
	return undefined;
};