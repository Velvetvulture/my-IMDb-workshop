import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

const Wrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 20% 1fr 20%;
`;
const SideBar = styled.div`
  background: #b3b3b0;
  /* background: -webkit-linear-gradient(top, #b3b3b0 0%, #e3e2dd 500px); */
  background: linear-gradient(top, #b3b3b0 0%, #e3e2dd 500px);
  background-color: #e3e2dd;
  background-repeat: no-repeat;
  margin: 0;
`;
const Main = styled.div`
  display: grid;
  grid-template-rows: 110px 1fr;
`;
const TitleBar = styled.div`
  background-color: #eeeeee;
  border-bottom: 1px solid #cccccc;
  color: #5a5a5a;
  padding: 5px 15px;
`;
const Title = styled.h1`
  font-family: arial, sans-serif;
  font-size: 30px;
  font-weight: normal;
  color: #424242;
`;
const MoviesToWatchList = styled.div``;
const MovieWrapper = styled.div`
  display: grid;
  grid-template-columns: 110px 1fr;
  grid-gap: 10px;
  padding: 10px;
  border-bottom: 1px solid #cccccc;
`;
const PictureDiv = styled.div`
  size: 100%;
  & > img {
    width: 100%;
  }
`;
const MovieInfoDiv = styled.div`
  position: relative;
`;
const SubTitleBar = styled.div`
  font-size: 14px;
  color: #666;
  margin-top: 5px;
  font-family: Verdana, Arial, sans-serif;
`;
const ActorsList = styled.div`
  font-size: 12px;
  color: #136cb2;
  font-family: Arial, sans-serif;
`;
const PlotSummary = styled.div`
  font-size: 13px;
  font-family: Verdana, Arial, sans-serif;
  color: #333;
  margin-top: 5px;
  text-align: justify;
`;
class Watchlist extends Component {
  handleRemove = (idx) => {
    this.props.removeMovie(idx);
  };
  render() {
    return (
      <Wrapper>
        <SideBar />
        <Main>
          <TitleBar>
            <Title>Your Watchlist</Title>
          </TitleBar>
          <MoviesToWatchList>
            {this.props.watchlist.map((movie, idx) => (
              <MovieWrapper>
                <PictureDiv>
                  <img height="150px" src={movie.poster} />
                </PictureDiv>
                <MovieInfoDiv>
                  <Link className="title-link" to={"/movie/" + movie.id}>
                    {movie.title}
                  </Link>
                  <SubTitleBar>
                    {movie.year}| {movie.rating}| {movie.runningTime}|{" "}
                    {movie.type}
                  </SubTitleBar>
                  <ActorsList>{movie.mainStars}</ActorsList>
                  <PlotSummary>{movie.summary}</PlotSummary>
                  <button
                    className="close"
                    title="Remove movie from list"
                    style={{ color: "silver" }}
                    onClick={() => this.handleRemove(idx)}
                  >
                    &times;
                  </button>
                </MovieInfoDiv>{" "}
              </MovieWrapper>
            ))}
          </MoviesToWatchList>
        </Main>
        <SideBar />
      </Wrapper>
    );
  }
}
export default withRouter(Watchlist);
