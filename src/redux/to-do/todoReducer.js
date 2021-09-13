import { ADD_TODO, DEL_TODO } from "./todoType";

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case DEL_TODO:
      return state.filter((el) => el.id !== action.payload);
    default:
      return state;
  }
};

export default reducer;
