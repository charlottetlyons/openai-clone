import React from "react";
import styled from "styled-components";

const StyledAvatar = styled.img`
    border-radius: 50%;
    height: auto;
    // max-width: 100%;
    display: block;
    vertical-align: middle;
    width: 32px;
    aspect-ratio: auto 32 / 32;
    cursor: pointer;
    background-image: url(${props => props.src});
`;

const Avatar = ({ src }) => {
    return <StyledAvatar src={src} />;
}

export default Avatar;