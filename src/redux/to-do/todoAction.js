//action-gnerator

import { ADD_TODO, DEL_TODO } from "./todoType";

export const addItem = (pyld) => {
  return {
    type: ADD_TODO,
    payload: pyld,
  };
};

export const delItem = (id) => {
  return {
    type: DEL_TODO,
    payload: id,
  };
};
