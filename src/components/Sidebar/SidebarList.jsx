import React from "react";
import styled from "styled-components";
import Avatar from "../common/Avatar.jsx";

const StyledSidebar = styled.div``;

const StyledSideBarListContainer = styled.div``;

const StyledAContainer = styled.div`
  display: flex;
  flex-direction: row;
  word-wrap: hide;
  width: 100%
`;

const StyledA = styled.a`
  display: flex;
  flex-direction: row;
  font-weight: 400;
  height: 2.5rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  gap: 0.625rem;
  align-items: center;
  width: 100%;
  cursor: pointer;
  border-radius: .5rem;

  &:hover {
    background-color: #ececec;
  }
`;

const SidebarList = ({ items }) => {
  return (
    <StyledSidebar>
      <StyledSideBarListContainer>
        {items.map((item, index) => (
          <StyledAContainer>
            <StyledA key={index}>
              <Avatar />{item}
            </StyledA>
          </StyledAContainer>
        ))}
      </StyledSideBarListContainer>
    </StyledSidebar>
  );
};

export default SidebarList;
