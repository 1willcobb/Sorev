import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: var(--text-color);
  font-weight: 500;
  transition: color 0.2s ease;
  &:hover {
    color: var(--global-yellow);
  }
`;

const Login = () => {
  return (
    <StyledNavLink to={"/login"}>
    <h3>LOGIN</h3>
  </StyledNavLink>
  )
}

export default Login