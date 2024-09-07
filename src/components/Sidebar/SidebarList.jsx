import React from "react";
import styled from "styled-components";

const StyledA = styled.a`
    overflow: hidden;
    word-wrap: break-word;
`

const SidebarList = ({ items }) => {
    return (
        <>
        {items.map((item, index) => (
            <StyledA key={index}>{item}</StyledA>
        ))}
        </>
    );
};

export default SidebarList;