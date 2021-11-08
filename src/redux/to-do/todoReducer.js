import { ADD_TODO, DEL_TODO } from "./todoType";

const initialState = [];

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [action.payload, ...state];
    case DEL_TODO:
      return state.filter((el) => el.id !== action.payload);
    default:
      return state;
  }
};

export default todoReducer;
