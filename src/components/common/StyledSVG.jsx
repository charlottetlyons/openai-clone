import styled from "styled-components";
import React from "react";

const StyledSVG = styled.svg`
  margin: 5px;
  color: #857889;
`;

const StyledSVGWithHover = styled.svg`
  color: #857889;
  border-radius: 20%;
  padding-left: 0.5rem;
  padding-right: 0.5rem;

  &:hover {
    background-color: #ededed;
  }
`;

export { StyledSVG, StyledSVGWithHover };
