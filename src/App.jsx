import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Route, BrowserRouter, Link } from "react-router-dom";
import Watchlist from "./client/pages/Watchlist.jsx";
import NewTrailers from "./client/components/NewTrailers.jsx";
import MoviesToWatch from "./client/components/MoviesToWatch.jsx";
import PrimarySearchAppBar from "./client/components/Navbar.jsx";
import GoogleSignIn from "./client/pages/GoogleSignIn.jsx";
import DetailsMovie from "./client/pages/DetailsMovie.jsx";
import StreamingList from "./client/components/StreamingList.jsx";

const SuperWrapper = styled.div`
  background-color: black;
`;
const Wrapper = styled.div`
  height: 220vh;
  margin: 0 12.5%;
`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      watchlist: [],
    };
  }
  componentDidMount() {
    this.fetchNewTrailers();
    this.fetchStreamingList();
    this.fetchMoviesToWatch();
  }
  fetchNewTrailers = async () => {
    let response = await fetch("/newTrailers");
    let body = await response.text();
    let parsed = JSON.parse(body);
    if (parsed.success) {
      console.log("newMovies from server", parsed.newTrailers);
      this.props.dispatch({
        type: "newTrailers",
        newTrailers: parsed.newTrailers,
      });
    }
  };
  fetchStreamingList = async () => {
    let response = await fetch("/streamingList");
    let body = await response.text();
    let parsed = JSON.parse(body);
    if (parsed.success) {
      this.props.dispatch({
        type: "StreamingList",
        listOfStreaming: parsed.listOfStreaming,
      });
    }
  };
  fetchMoviesToWatch = async () => {
    let response = await fetch("/listOfMovies");
    let body = await response.text();
    let parsed = JSON.parse(body);
    if (parsed.success) {
      this.props.dispatch({
        type: "listOfMovies",
        listOfMovies: parsed.listOfMovies,
      });
    }
  };
  addToWatchlist = (movie) => {
    this.setState({ watchlist: this.state.watchlist.concat(movie) });
  };
  renderLogin = () => {
    return <GoogleSignIn />;
  };
  removeMovie = (idx) => {
    const watchlistCopy = this.state.watchlist.slice();
    watchlistCopy.splice(idx, 1);
    this.setState({ watchlist: watchlistCopy });
  };
  renderWatchlist = () => {
    return (
      <div>
        <Watchlist
          watchlist={this.state.watchlist}
          removeMovie={this.removeMovie}
        />
      </div>
    );
  };
  renderHome = () => {
    return (
      <SuperWrapper>
        <Wrapper>
          <div>
            <NewTrailers />
            <StreamingList />
            <MoviesToWatch />
          </div>
        </Wrapper>
      </SuperWrapper>
    );
  };
  renderMovieDetails = (routerData) => {
    const movieId = routerData.match.params.movieId;
    console.log("movieId:", movieId);
    const fullMovieSlate = this.props.listOfMovies.concat(
      this.props.listOfStreaming
    );
    const movie = fullMovieSlate.find((movie) => {
      console.log("movie._id:", movie._id);
      return movie._id === movieId;
    });
    const isInWatchlist = this.state.watchlist.find((movie) => {
      return movie._id === movieId;
    });
    console.log("Watchlist", Watchlist);
    if (movie === undefined) return <div>No movie found</div>;
    return (
      <div>
        <DetailsMovie
          movie={movie}
          isInWatchlist={isInWatchlist}
          addToWatchlist={this.addToWatchlist}
          removeMovie={this.removeMovie}
          watchlist={this.state.watchlist}
        />
      </div>
    );
  };
  render = () => {
    return (
      <>
        <BrowserRouter>
          <PrimarySearchAppBar watchlistSize={this.state.watchlist.length} />
          <Route exact={true} path="/login" render={this.renderLogin} />
          <Route exact={true} path="/" render={this.renderHome} />
          <Route exact={true} path="/watchlist" render={this.renderWatchlist} />
          <Route
            exact={true}
            path="/movie/:movieId"
            render={this.renderMovieDetails}
          />
        </BrowserRouter>
      </>
    );
  };
}
let mapStateToProps = (state) => {
  return {
    listOfMovies: state.listOfMovies,
    listOfStreaming: state.listOfStreaming,
  };
};
export default connect(mapStateToProps)(App);
