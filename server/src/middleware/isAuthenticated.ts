import { MyContext } from "../types/MyContext";
import { MiddlewareFn } from "type-graphql";

export const isAuthenticated: MiddlewareFn<MyContext> = ({ context: { req: { session: { houseId } } } }, next) => {
    if (houseId) return next();
    throw new Error('You cant perform this action without being authenticated.');
};