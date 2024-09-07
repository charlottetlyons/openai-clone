import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`
const StyledH3 = styled.h3`
    padding: 5px 20px;
`

const Chatbox = () => {
    return <StyledHeader>
        <StyledH3>ChatGPT 4o mini</StyledH3>
        <StyledH3>Icon Here</StyledH3>
    </StyledHeader>
};

export default Chatbox;