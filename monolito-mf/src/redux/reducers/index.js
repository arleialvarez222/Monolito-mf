import { combineReducers } from "redux";
import listUsersReducer from "./list-user-reducer";
import usersReducer from "./user-reducer"

export const AllReducers = combineReducers({
    listUsersReducer,
    usersReducer
})