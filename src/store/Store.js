import { createStore } from "redux";
import reducer from "./reducer";

const store = createStore(
  reducer,
  {
    loggedIn: false,
    username: "",
    searchQuery: "",
    newTrailers: [],
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
