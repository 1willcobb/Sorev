import styled from "styled-components";
import { NavLink } from "react-router-dom";
from 

interface StyledCTAButtonProps {
  to: string;
  children: React.ReactNode;
}

export const StyledCTAButton = styled(NavLink)`
  padding: 1rem;
  border-radius: 171px;
  text-decoration: none;
  border: none;
  background: var(--global-green);
  box-shadow: 4px 4px 4px 0px rgba(255, 255, 255, 0.05);
  white-space: nowrap;
  align-items: center;
  justify-content: center;
  transition: transform 0.1s ease;
  &:hover {
    transform: translate(-1px, -1px);
    box-shadow: 4px 4px 2px 0px rgba(0, 0, 0, 0.15);
  }
  &:active {
    box-shadow: 1px 1px 2px 0px rgba(255, 255, 255, 1);
    transform: translate(1px, 1px);
  }

  h3 {
    background: none;
    color: var(--global-background);
  }
`;

const CallToAction = () => {
  return (
    <StyledCTAButton to={"/video"}>
      <h3>GET STARTED</h3>
    </StyledCTAButton>
  );
};

export default CallToAction;
