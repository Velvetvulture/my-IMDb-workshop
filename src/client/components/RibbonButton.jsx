import React, { useState } from "react";
import styled from "styled-components";

// const StyledButton = styled.button`
//   background: url("/ribbonbuttons.png");
//   background-position: ${(props) =>
//     props.clicked ? "-8px -5px" : "-8px -62px"};
//   width: 40px;
//   height: 58px;
//   border: none;
//   outline: none;
//   position: absolute;
//   color: black;
//   top: 22px;
//   left: 5px;
// `;
const StyledButtonTrue = styled.button`
  background: url("/ribbonbuttons.png");
  background-position: -8px -5px;
  width: 40px;
  height: 58px;
  border: none;
  outline: none;
  position: absolute;
  color: black;
  top: 22px;
  left: 5px;
`;
const StyledButtonFalse = styled.button`
  background: url("/ribbonbuttons.png");
  background-position: -8px -62px;
  width: 40px;
  height: 58px;
  border: none;
  outline: none;
  position: absolute;
  color: black;
  top: 22px;
  left: 5px;
`;
function RibbonButton(props) {
  // const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    // setClicked(!clicked);
    props.onClick(); // To activate the onClick function in the parent
  };
  if (!props.isInWatchlist)
    return (
      <StyledButtonFalse
        title="Click to add to Watchlist"
        onClick={handleClick}
        // clicked={props.isInWatchlist}
      />
    );
  if (props.isInWatchlist)
    return (
      <StyledButtonTrue
        title="Click to remove from watchlist"
        onClick={handleClick}
        // clicked={props.isInWatchlist}
      />
    );
}

export default RibbonButton;
