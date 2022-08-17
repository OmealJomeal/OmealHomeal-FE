import React from "react";
import Promition from "./Promition";
import SearchBox from "./SearchBox";
import styled, { ThemeProvider } from "styled-components";
import theme from "../../theme";

const Header = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Promition />
        <div
          style={{
            width: "100%",
            height: "158px",
            display: "flex",
          }}
        >
          <SearchBox />
        </div>
      </ThemeProvider>
    </>
  );
};

export default Header;
