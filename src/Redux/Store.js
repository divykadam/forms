import { createStore, combineReducers } from "redux";
import Reducer from "../Reducer/Reducer";

const rootReducer = combineReducers({
  reducer: Reducer,
});
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// console.warn(store.getState())

export default store;
