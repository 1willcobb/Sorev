import React, { useRef, useState } from "react";
import { styled, Container, Box } from "@mui/material";

const green = "#87D2A7";
const red = "#EEA186";
const purple = "#C1A2EA";
const yellow = "#F7D976";

const StyledBlock = styled("div")`
  margin-top: 1em;
  width: 75%;
  height: 400px;
  display: flex;
  border-top-right-radius: 75px;
  border-bottom-right-radius: 75px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
  transition: transform 0.3s, z-index 0s 0.3s; /* Add a transition for smooth animation */
  transform: translateY(0);
`;

const StyledBlockRight = styled(StyledBlock)`
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 75px;
  border-bottom-left-radius: 75px;
  right: 0;
  position: absolute;
  transform: translateY(0);
`;

const WhatWeDo = () => {
  const whatWeDoRef = useRef<HTMLDivElement | null>(null);
  const [hoveredBlock, setHoveredBlock] = useState<number | null>(null);
  const [lastHoveredBlock, setLastHoveredBlock] = useState<number | null>(null);

  const handleMouseOver = (blockNumber: number) => {
    setLastHoveredBlock(hoveredBlock);
    setHoveredBlock(blockNumber);
  };

  const handleMouseOut = () => {
    setHoveredBlock(null);
  };

  return (
    <div
      style={{ display: "flex", width: "100%", position: "relative" }}
      ref={whatWeDoRef}
    >
      <StyledBlock
        style={{
          zIndex: hoveredBlock === 1 ? 11 : lastHoveredBlock === 1 ? 11 : 10,
          background: green,
          transform: hoveredBlock === 1 ? "translateY(100px)" : "translateY(0)",
        }}
        onMouseOver={() => handleMouseOver(1)}
        onMouseOut={handleMouseOut}
      >
        <Container sx={{ display: "flex", justifyContent: "space-evenly" }}>
          <Box sx={{ fontSize: "2em", fontWeight: "bold" }}>What We Do</Box>
          <Box sx={{ fontSize: "2em", fontWeight: "bold" }}>What We Do</Box>
        </Container>
      </StyledBlock>
      <StyledBlockRight
        style={{
          zIndex: hoveredBlock === 2 ? 11 : lastHoveredBlock === 2 ? 11 : 9,
          top: "300px",
          background: red,
          transform: hoveredBlock === 2 ? "translateY(100px)" : "translateY(0)",
        }}
        onMouseOver={() => handleMouseOver(2)}
        onMouseOut={handleMouseOut}
      >
        2
      </StyledBlockRight>
      <StyledBlock
        style={{
          zIndex: hoveredBlock === 3 ? 11 : lastHoveredBlock === 3 ? 11 : 8,
          top: "600px",
          background: purple,
          transform: hoveredBlock === 3 ? "translateY(100px)" : "translateY(0)",
        }}
        onMouseOver={() => handleMouseOver(3)}
        onMouseOut={handleMouseOut}
      >
        3
      </StyledBlock>
      <StyledBlockRight
        style={{
          zIndex: hoveredBlock === 4 ? 11 : lastHoveredBlock === 4 ? 11 : 7,
          top: "900px",
          background: yellow,
          transform: hoveredBlock === 4 ? "translateY(00px)" : "translateY(0)",
        }}
        onMouseOver={() => handleMouseOver(4)}
        onMouseOut={handleMouseOut}
      >
        4
      </StyledBlockRight>
    </div>
  );
};

export default WhatWeDo;
