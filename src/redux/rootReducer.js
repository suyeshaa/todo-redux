import { combineReducers } from "redux";
import authReducer from "./auth/authReducer";
import todoReducer from "./to-do/todoReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  todo: todoReducer,
});

export default rootReducer;
