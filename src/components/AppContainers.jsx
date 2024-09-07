import React from 'react';
import styled from 'styled-components';

const StyledAppContainer = styled.div`
    display: flex;
    height: 100vh;
    background-color: #ffffff;
`;

const AppContainer = ({ children }) => {
    return <StyledAppContainer>
        {children}
    </StyledAppContainer>;
};

export default AppContainer;