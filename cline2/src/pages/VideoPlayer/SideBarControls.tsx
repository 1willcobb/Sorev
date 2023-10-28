import styled from "@emotion/styled";

const StyledSideBarControls = styled.div`
  width: 100%;
  height: 100%;
  background-color: red;
`;

const SideBarControls = () => {
  return (
    <StyledSideBarControls>
      <ul>
        <li>test</li>
        <li>test</li>
        <li>test</li>
      </ul>
    </StyledSideBarControls>
  );
};

export default SideBarControls;
