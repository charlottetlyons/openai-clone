import React from "react";
import styled from "styled-components";

const StyledAvatar = styled.img`
    border-radius: 50%;
    margin: 10px;
    background-color: #ededed;
    width: 32px;
    aspect-ratio: auto 32 / 32;
`;

const Avatar = ({ src }) => {
    return <StyledAvatar src={src} />;
}

export default Avatar;