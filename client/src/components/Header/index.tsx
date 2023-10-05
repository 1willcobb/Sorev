import React, { useState } from "react";
import Login from "./Login";
import Logo from "./Logo";
import Nav from "./Nav";
import CallToAction from "./CTA";
import styled from "styled-components";

interface HeaderProps {
  sticky: boolean;
}

const StyledHeader = styled.header<HeaderProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  height: 3rem;
  background-color: #404040;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: ${(props) => (props.sticky ? "sticky" : "static")};
  top: 0;
  z-index: 1;
`;

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  `

const Header = () => {
  const [sticky, setSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <StyledHeader sticky={sticky}>
      <StyledDiv>
        <Logo />
        <Nav />
      </StyledDiv>

      <StyledDiv>
        <Login />
        <CallToAction />
      </StyledDiv>
    </StyledHeader>
  );
};

export default Header;
