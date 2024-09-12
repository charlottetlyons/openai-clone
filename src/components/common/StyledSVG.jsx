import styled from "styled-components";
import React from "react";

const StyledSVG = styled.svg`
  stroke-width: 2;
  flex-shrink: 0;
  height: 24px;
  width: 24px;
  display: block;
  vertical-align: middle;
`;

const StyledSVGWithHover = styled.svg`
  color: #857889;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  height: 100%;
  border-radius: 0.5rem;

  &:hover {
    background-color: #ededed;
    cursor: pointer;
  }
`;

export { StyledSVG, StyledSVGWithHover };
