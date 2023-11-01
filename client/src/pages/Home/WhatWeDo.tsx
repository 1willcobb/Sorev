import React, { useRef, useState } from "react";
import { styled, Container, Box } from "@mui/material";
import zIndex from "@mui/material/styles/zIndex";

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
  const [zIndex, setZIndex] = useState<number[]>([10, 9, 8, 7]);
  const [hoveredBlock, setHoveredBlock] = useState<number | null>(null);
  const [lastHoveredBlock, setLastHoveredBlock] = useState<number | null>(null);

  // Function to handle mouse over
  const handleMouseOver = (hoverdBlock: number) => {
    setHoveredBlock(hoverdBlock); // Set hoveredBlock state to hovered block
    setZIndex([...zIndex, (zIndex[hoverdBlock - 1] = 11)]); // Set zIndex when mouse is over
  };

  // Function to handle mouse out
  const handleMouseOut = () => {
    // Reset zIndex after 300 milliseconds
    setHoveredBlock(null); // Reset hoveredBlock state to null
    setTimeout(() => {
      setZIndex([...zIndex]); // Set zIndex back to its original state
    }, 300);
  };

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        position: "relative",
        height: "1350px",
      }}
      ref={whatWeDoRef}
    >
      <StyledBlock
        style={{
          zIndex: zIndex[0],
          background: green,
          transform: hoveredBlock === 1 ? "translateY(100px)" : "translateY(0)",
        }}
        onMouseOver={() => handleMouseOver(1)}
        onMouseOut={handleMouseOut}
      >
        <Container sx={{ display: "flex", justifyContent: "space-evenly" }}>
          <Box sx={{ fontSize: "2em", fontWeight: "bold" }}>DESIGN</Box>
        </Container>
      </StyledBlock>
      <StyledBlockRight
        style={{
          zIndex: zIndex[1],
          top: "300px",
          background: red,
          transform: hoveredBlock === 2 ? "translateY(100px)" : "translateY(0)",
        }}
        onMouseOver={() => handleMouseOver(2)}
        onMouseOut={handleMouseOut}
      >
        <Box sx={{ fontSize: "2em", fontWeight: "bold" }}>PRODUCE</Box>
      </StyledBlockRight>
      <StyledBlock
        style={{
          zIndex: zIndex[2],
          top: "600px",
          background: purple,
          transform: hoveredBlock === 3 ? "translateY(100px)" : "translateY(0)",
        }}
        onMouseOver={() => handleMouseOver(3)}
        onMouseOut={handleMouseOut}
      >
        <Box sx={{ fontSize: "2em", fontWeight: "bold" }}>MARKET</Box>
      </StyledBlock>
      <StyledBlockRight
        style={{
          zIndex: zIndex[3],
          top: "900px",
          background: yellow,
          transform: hoveredBlock === 4 ? "translateY(100px)" : "translateY(0)",
        }}
        onMouseOver={() => handleMouseOver(4)}
        onMouseOut={handleMouseOut}
      >
        <Box sx={{ fontSize: "2em", fontWeight: "bold" }}>MANAGE</Box>
      </StyledBlockRight>
    </div>
  );
};

export default WhatWeDo;
