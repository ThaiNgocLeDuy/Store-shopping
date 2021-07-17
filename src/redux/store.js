import { applyMiddleware, createStore } from "redux";
import rootReducers from "./reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const middleware = [thunk];

const setLocalStorage = (state) => {
  try {
    const persistantState = JSON.stringify(state);
    localStorage.setItem("persistantState", persistantState);
  } catch (e) {
    console.log(e);
  }
};

const getLocalStorage = () => {
  try {
    const persistantState = localStorage.getItem("persistantState");
    if (persistantState === null) return undefined;
    return JSON.parse(persistantState);
  } catch (e) {
    console.log(e);
  }
};

const store = createStore(
  rootReducers,
  getLocalStorage(),
  composeWithDevTools(applyMiddleware(...middleware))
);

store.subscribe(() => setLocalStorage(store.getState()));

export default store;
