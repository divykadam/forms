import { combineReducers } from "redux";
import UpdateEmployee from "./updateEmployee";

const rootReducer = combineReducers({ updateEmployee: UpdateEmployee });

export default rootReducer;
