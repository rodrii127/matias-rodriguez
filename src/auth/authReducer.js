import { types } from "../types/types";

export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case types.login:
            return {
                ...action.payload.name,
                logged: true
            }
            return {
                logged: false
            }
        case types.login:
            return {
                logged: false
            }
        default:
            return state;
    }
}