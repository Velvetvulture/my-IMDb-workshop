import React, { Component, useState } from "react";
import { listOfMovies, listOfStreaming } from "./Data.jsx";
import SearchResults from "./Components/SearchResults.jsx";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import styled from "styled-components";
import { Route, BrowserRouter, Link } from "react-router-dom";
import Watchlist from "./Watchlist.jsx";
import NewTrailers from "./NewTrailers.jsx";
import MoviesToWatch from "./moviesToWatch.jsx";
import PrimarySearchAppBar from "./Navbar.jsx";
import GoogleSignIn from "./GoogleSignIn.jsx";
import DetailsMovie from "./DetailsMovie.jsx";
import StreamingList from "./Components/StreamingList.jsx";

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
      movies: listOfMovies.concat(listOfStreaming),
      watchlist: [],
    };
  }
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
    const movie = this.state.movies.find((movie) => {
      return movie.id === movieId;
    });
    if (movie === undefined) return <div>No movie found</div>;
    return (
      <div>
        <DetailsMovie movie={movie} addToWatchlist={this.addToWatchlist} />
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

export default App;
