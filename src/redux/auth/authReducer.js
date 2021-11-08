import { LOGIN, LOGOUT } from "./authType";

const initialState = false;

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return true;
    case LOGOUT:
      return false;
    default:
      return state;
  }
};

export default authReducer;
