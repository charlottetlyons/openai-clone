import React from "react";
import styled from "styled-components";
import ButtonBar from "./ButtonBar.jsx";
import SidebarList from "./SidebarList.jsx";

const StyledSidebar = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 260px;
  max-width: 260px;
  height: 100%;
  background-color: #f9f9f9;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  box-sizing: border-box;   

  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledSidebarList = styled.div`
  height: 100%;
  padding-right: 0.5rem;
  margin-right: -0.5rem;
  position: relative;
  flex: 1 1 0%;
  overflow-y: auto;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.5s;
`;

const Sidebar = () => {
  return (
    <StyledSidebar>
      <ButtonBar />
      <StyledSidebarList>
        <SidebarList items={["ChatGPT", "Story Editor", "Character Creator"]} />
        <SidebarList
          items={[
            "How do you purchase live ammunition?",
            "Is the Pope catholic?",
            "How do I get this dang ball into this flippin' cup?!",
          ]}
        />
      </StyledSidebarList>
    </StyledSidebar>
  );
};

export default Sidebar;
