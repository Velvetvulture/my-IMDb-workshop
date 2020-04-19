import React, { useState } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background: url("/ribbonbuttons.png");
  background-position: ${(props) =>
    props.clicked ? "-8px -5px" : "-8px -62px"};
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
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
    props.onClick(); // To activate the onClick function in the parent
  };
  return (
    <StyledButton title={props.title} onClick={handleClick} clicked={clicked} />
  );
}

export default RibbonButton;
