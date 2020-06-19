const reducer = (state, action) => {
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
  if (action.type === "newTrailers") {
    return { ...state, newTrailers: action.newTrailers };
  }
  if (action.type === "StreamingList") {
    return { ...state, listOfStreaming: action.listOfStreaming };
  }
  if (action.type === "listOfMovies") {
    return { ...state, listOfMovies: action.listOfMovies };
  }
  return state;
};

export default reducer;
