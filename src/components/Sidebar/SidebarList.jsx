import React from "react";
import styled from "styled-components";
import Avatar from "../common/Avatar.jsx";

const StyledSidebar = styled.div``;

const StyledSideBarListtContainer = styled.div``;

const StyledAContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledA = styled.a`
  
  font-weight: 400;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  gap: 0.625rem;
  align-items: center;
`;

const SidebarList = ({ items }) => {
  return (
    <StyledSidebar>
      <StyledSideBarListtContainer>
        {items.map((item, index) => (
          <StyledAContainer>
            <Avatar />
            <StyledA key={index}>{item}</StyledA>
          </StyledAContainer>
        ))}
      </StyledSideBarListtContainer>
    </StyledSidebar>
  );
};

export default SidebarList;
