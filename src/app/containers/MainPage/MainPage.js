import React from 'react';
import styled from 'styled-components';

const MainPage = ( {data} ) => {

  const message = data;

  return (
    <div>{message}</div>
  );
}

export default MainPage;
