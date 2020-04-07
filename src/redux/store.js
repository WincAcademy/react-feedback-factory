import { createStore } from "redux";
import rootReducer from "./reducers";
import { loadState, saveState } from "./localStorage";

const state = loadState(); // persisted in localStorage
const store = createStore(rootReducer, state);

store.subscribe(() => {
  saveState(store.getState()); // TODO: Debounce handler!
});

export default store;
