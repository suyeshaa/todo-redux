import { createStore } from "redux";
import rootReducer from "./rootReducer";

import lodash from "lodash";
//getDataFromLocal
const getDataFromLocal = () => {
  try {
    const dt = localStorage.getItem("stt");
    if (dt === null) return undefined;
    return JSON.parse(dt);
  } catch {
    console.log("nahi hua");
    return undefined;
  }
};

const saveDataToLocal = (state) => {
  try {
    const data = JSON.stringify(state);
    localStorage.setItem("stt", data);
  } catch {
    console.log("unable to save");
  }
};

const store = createStore(
  rootReducer,
  getDataFromLocal(),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//subscribe run when state change
//saveDataToLocal
store.subscribe(
  lodash.throttle(() => {
    saveDataToLocal(store.getState());
  }, 500)
);

export default store;
