import styled from "styled-components";
import React from "react";

const StyledSVG = styled.svg`
  margin: 5px;
  color: #857889;
`;

const StyledSVGWithHover = styled.svg`
  color: #857889;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  height: 100%;
  border-radius: .5rem;

  &:hover {
      background-color: #ededed;
      cursor: pointer;
  }
`

export { StyledSVG, StyledSVGWithHover };
