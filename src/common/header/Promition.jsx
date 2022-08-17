import React from "react";
import styled from "styled-components";

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
  return <Text>지금 가입하고 인기상품 100 원에 받아가세요!</Text>;
};

export default Promition;
