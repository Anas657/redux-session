import { combineReducers } from "redux";
import { usersListReducer } from "./users-list-reducer";


export const rootReducer = combineReducers({
usersListData: usersListReducer,

});