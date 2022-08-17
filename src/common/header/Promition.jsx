import React from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "../../theme";

const Promition = () => {
  const Text = styled.div`
    width: 100%;
    height: 42px;
    background-color: ${(props) => props.theme.maincolor};
    text-align: center;
    line-height: 42px;
    color: white;
    font-weight: 500;
  `;
  return (
    <ThemeProvider theme={theme}>
      <Text>지금 가입하고 인기상품 100 원에 받아가세요!</Text>
    </ThemeProvider>
  );
};

export default Promition;
