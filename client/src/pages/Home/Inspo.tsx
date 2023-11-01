import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { Typography } from "@mui/material";

const text1 = "WE HELP YOU";
const words = ["DEVELOP", "PRODUCE", "MARKET", "MANAGE"];
const text2 = "YOUR NEXT COURSE";
const colors = ["#87D2A7", "#EEA186", "#C1A2EA", "#F7D976"];

const Slide = keyframes`
  0% {
    top: 0;
  }
  25% {
    top: -34px;
  }
  50% {
    top: -68px;
  }
  75% {
    top: -102px;
  }
`;

const StyledText = styled.span`
  top: 4px;
  height: 34px;
  line-height: 34px;
  position: relative;
  overflow: hidden;
  width: 10em;
  text-align: left;
  display: flex;
  margin-left: 10px;
  /* background-color: #000; */
  & > span {
    position: absolute;
    top: 0;
    animation: ${Slide} 5s infinite;
    font-weight: bold;
    font-size: 34px;
  }
`;

const WordAnimation = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
      }}
    >
      <div style={{ display: "flex" }}>
        <Typography variant="h4" style={{ fontWeight: "bold", whiteSpace: "nowrap" }}>
          {text1}
        </Typography>
        <StyledText>
          <span>
            {words.map((word, index) => {
              return (
                <>
                  <span key={index} style={{color: colors[index] }} >{word}</span>
                  <br />
                </>
              );
            })}
          </span>
        </StyledText>
        <br />
      </div>
      <Typography variant="h4" style={{ fontWeight: "bold" }}>
        {text2}
      </Typography>
    </div>
  );
};

export default WordAnimation;
