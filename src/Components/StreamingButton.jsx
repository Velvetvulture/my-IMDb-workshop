import React, { useState } from "react";
import styled from "styled-components";

const NetflixLinkButton = styled.button`
  border: 0;
  background-color: red;
  font-family: inherit;
  margin: 10px 0;
  font-size: 100%;
  /* color: rgba(0, 0, 0, 0.87); */
  color: white;
  padding: 10px;
  outline: none;
  :hover {
    background-color: rgba(255, 0, 0, 0.7);
  }
`;
const AmazonPrimeLinkButton = styled.button`
  border: 0;
  background-color: rgb(25, 69, 83);
  font-family: inherit;
  margin: 10px 0;
  font-size: 100%;
  /* color: rgba(0, 0, 0, 0.87); */
  color: white;
  padding: 10px;
  outline: none;
  :hover {
    background-color: rgba(25, 69, 83, 0.7);
  }
`;
function StreamingButton(props) {
  if (props.stream === "Netflix")
    return (
      <a href="https://www.netflix.com/ca/" target="_blank">
        <NetflixLinkButton>Watch on {props.stream}</NetflixLinkButton>
      </a>
    );
  if (props.stream === "Amazon Prime Video")
    return (
      <a href="https://www.primevideo.com/" target="_blank">
        <AmazonPrimeLinkButton>Watch on {props.stream}</AmazonPrimeLinkButton>
      </a>
    );
  return (
    <h4 style={{ fontWeight: "normal" }}>No streaming source available</h4>
  );
}

export default StreamingButton;
