import React from 'react';
import styled from 'styled-components';
import ButtonBar from './ButtonBar.jsx';
import SidebarList from './SidebarList.jsx';

const StyledSidebar = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 260px;
    max-width: 260px;
    height: 100%;
    background-color: #f9f9f9;
    @media (max-width: 768px) {
        display: none;
    }
`;

const Sidebar = ({ children }) => {
    return <StyledSidebar>
        <ButtonBar/>
        <SidebarList items={["ChatGPT", "Story Editor", "Character Creator"]}/>
        <SidebarList items={["How do you purchase live ammunition?", "Is the Pope catholic?", "How do I get this dang ball into this flippin' cup?!"]}/>
    </StyledSidebar>;
};

export default Sidebar;