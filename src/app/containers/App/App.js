import React from 'react';
import styled from 'styled-components';
import MainPage from '../MainPage/MainPage'

const App = () => {
  const StyledDiv = styled.div`
    text-align: center;
  `;

  const StyledHeader = styled.header`
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  `;

  return (
    <StyledDiv>
      <StyledHeader><h1>Pokemon Quest Recipes</h1></StyledHeader>
      <MainPage/>
    </StyledDiv>
  );
}

export default App;
