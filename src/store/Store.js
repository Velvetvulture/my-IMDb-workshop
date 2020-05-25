import { createStore } from "redux";
import reducer from "./Reducer.jsx";

const store = createStore(
  reducer,
  {
    loggedIn: false,
    username: "",
    searchQuery: "",
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
