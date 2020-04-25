import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import React, { Component } from "react";
import { listOfMovies, listOfStreaming } from "../Data.jsx";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ResultsWrapper = styled.div`
  position: absolute;
  top: 36px;
  z-index: 1;
`;
const MovieWrapper = styled.div`
  display: grid;
  grid-template-columns: 110px 1fr;
  grid-gap: 10px;
  padding: 5px;
  border-bottom: 1px solid darkgray;
  background-color: #242121;
  width: 520px;
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
  color: #eeeeee;
  margin-top: 5px;
  font-family: Verdana, Arial, sans-serif;
`;
const ActorsList = styled.div`
  font-size: 12px;
  color: #eeeeee;
  font-family: Arial, sans-serif;
`;
function SearchResults(props) {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.searchQuery);
  const results = listOfMovies.concat(listOfStreaming).filter((movie) => {
    return movie.title.toLowerCase().includes(query.toLowerCase());
  });
  const handleClick = () => {
    props.clicked();
    dispatch({ type: "clear-searchBar" });
  };
  return (
    <ResultsWrapper>
      {query !== "" &&
        results.map((movie, idx) => {
          return (
            <div key={`result-${idx}`}>
              <MovieWrapper>
                <PictureDiv>
                  <img height="150px" src={movie.poster} />
                </PictureDiv>
                <MovieInfoDiv>
                  <Link
                    className="title-link"
                    to={"/movie/" + movie.id}
                    onClick={handleClick}
                  >
                    {movie.title}
                  </Link>
                  <SubTitleBar>
                    {movie.year}| {movie.rating}| {movie.runningTime}|{" "}
                    {movie.type}
                  </SubTitleBar>
                  <ActorsList>{movie.mainStars}</ActorsList>
                </MovieInfoDiv>{" "}
              </MovieWrapper>
            </div>
          );
        })}
    </ResultsWrapper>
  );
}

export default SearchResults;
