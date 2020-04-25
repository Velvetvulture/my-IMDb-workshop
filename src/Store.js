import { createStore } from "redux";
let reducer = (state, action) => {
  if (action.type === "login-success") {
    return { ...state, loggedIn: true, username: action.username };
  }
  if (action.type === "logout") {
    return { ...state, loggedIn: false };
  }
  if (action.type === "login") {
    return { ...state, loggedIn: true };
  }
  if (action.type === "query") {
    return { ...state, searchQuery: action.q };
  }
  if (action.type === "clear-searchBar") {
    return { ...state, searchQuery: "" };
  }
  return state;
};

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
