import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: var(--text-color);
  h3 {
    white-space: nowrap;
  }
`;

const StyledNavLinkGreen = styled(StyledNavLink)`
  :hover {
    transition: color 0.2s ease;
    color: var(--global-green);
  }
`;

const StyledNavLinkPurple = styled(StyledNavLink)`
  :hover {
    transition: color 0.2s ease;
    color: var(--global-purple);
  }
`;

const StyledNavLinkRed = styled(StyledNavLink)`
  :hover {
    transition: color 0.2s ease;
    color: var(--global-red);
  }
`;

const Nav = () => {
  return (
    <>
      <StyledNavLinkGreen to={"/products"}>
        <h3>PRODUCTS</h3>
      </StyledNavLinkGreen>
      <StyledNavLinkPurple to={"/why"}>
        <h3>WHY SOREV</h3>
      </StyledNavLinkPurple>
      <StyledNavLinkRed to={"/faq"}>
        <h3>FAQ</h3>
      </StyledNavLinkRed>
    </>
  );
};

export default Nav;
