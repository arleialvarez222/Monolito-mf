import { combineReducers } from "redux";
import listUsersReducer from "./list-user-reducer";
import usersReducer from "./user-reducer"
import snackbarReducer from "./snackbar-reducer"

export const AllReducers = combineReducers({
    listUsersReducer,
    usersReducer,
    snackbarReducer
})