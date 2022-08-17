import React from "react";
import styled from "styled-components";

const SearchBox = () => {
  const Searchbox = styled.input`
    width: 400px;
    height: 50px;
    border-color: ${(props) => props.theme.maincolor};
    border-radius: 6px;
    border-width: 1px;
    font-size: large;
    margin: auto;
    &:focus {
      outline: none;
    }
  `;

  return (
    <>
      <Searchbox placeholder="검색어를 입력해주세요"></Searchbox>
    </>
  );
};

export default SearchBox;
