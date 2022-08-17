import React from "react";
import theme from "../../theme";

const SearchBox = () => {
  const Searchbox = styled.input``;

  return (
    <>
      <ThemeProvider theme={theme}>
        <Text>지금 가입하고 인기상품 100 원에 받아가세요!</Text>
      </ThemeProvider>
    </>
  );
};

export default SearchBox;
