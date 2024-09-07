import styled from "styled-components";
import React from "react";

const StyledSVG = styled.svg`
    margin: 5px;
    color: #857889;
`

const StyledSVGWithHover = styled.svg`
    padding: 7.5px;
    margin: 10px;
    color: #857889;
    border-radius: 20%;

    &:hover {
        background-color: #ededed;
    }
`

export { StyledSVG, StyledSVGWithHover };