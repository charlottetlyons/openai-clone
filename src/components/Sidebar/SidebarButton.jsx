import React from "react";
import { StyledSVG } from "../common/StyledSVG.jsx";
import styled from "styled-components";
import useHover from "../../hooks/useHover.jsx";

const StyledIconContainer = styled.div`
  flex-shrink: 0;
  width: 1.5rem;
  height: 1.5rem;
`;

const StyledIcon = styled.div`
  color: #0d0d0d;
  background-color: #fff;
  border-radius: 9999px;
  justify-content: center;
  align-items: center;
  height: 100%;
  display: flex;
  position: relative;
`;

const StyledNewChatText = styled.div`
  color: #0d0d0d;
  font-size: 0.875rem;
  line-height: 1.25rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  flex-grow: 1;
`;

const StyledSidebarButton = styled.a`
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  font-weight: 400;
  background-color: #f9f9f9;
  border-radius: 0.5rem;
  align-items: center;
  height: 2.5rem;
  display: flex;
  gap: 0.625rem;

  &:hover {
    // TODO: make common colors
    background-color: #ececec;
  }
`;

const SidebarButton = (props) => {
  const {
    children,
    style,
    svgProps,
    textContent,
    pathElement,
    hoverHandler,
    leaveHandler,
  } = props;

  return (
    <StyledSidebarButton
      onMouseEnter={hoverHandler}
      onMouseLeave={leaveHandler}
    >
      <StyledIconContainer>
        <StyledIcon>
          <StyledSVG style={style} {...svgProps}>
            <text x="-9999" y="-9999">
              {textContent}
            </text>
            {pathElement}
          </StyledSVG>
        </StyledIcon>
      </StyledIconContainer>
      <StyledNewChatText>{textContent}</StyledNewChatText>
      {children}
    </StyledSidebarButton>
  );
};

export default SidebarButton;
