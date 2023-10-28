import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const words = ["create", "develop", "build", "crush"];

const Slide = keyframes`
  0% {
    top: 0;
  }
  25% {
    top: -1.2em;
  }
  50% {
    top: -2.4em;
  }
  75% {
    top: -3.6em;
  }
`;

const StyledText = styled.span`
  top: 3px;
  height: 1.2em;
  line-height: 1.2em;
  position: relative;
  overflow: hidden;
  width: 4.5em;
  text-align: left;
  & > span {
    position: absolute;
    top: 0;
    animation: ${Slide} 5s infinite;
    font-weight: bold;
  }
`;

const WordAnimation = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginLeft: "auto",
        marginRight: "auto",
        alignItems: "left",
        maxWidth: "200px",
      }}
    >
      <div style={{ display: "flex", justifyContent: "left" }}>
        <p>We help you</p>
        <StyledText>
          <span style={{ display: "flex",  marginLeft: "5px" }}>
            Write
            <br />
            Produce
            <br />
            Market
            <br />
            Manage
          </span>
        </StyledText>
        <br />
      </div>
      <p style={{ display: "flex",  justifyContent: "left" }}>Your next course</p>
    </div>
  );
};

export default WordAnimation;
