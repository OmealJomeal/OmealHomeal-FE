import React, { useState } from "react";

const HeaderIcons = () => {
  return (
    <>
      <div
        style={{
          width: "147px",
          height: "36px",
          position: "absolute",
          right: "0px",
          bottom: "25%",
        }}
      >
        <img
          style={{ margin: "0 5px" }}
          alt="searchicon"
          src="img/headermap.png"
        />
        <img
          style={{ margin: "0 5px" }}
          alt="searchicon"
          src="img/headerheart.png"
        />
        <a href="/cart">
          <img
            style={{ margin: "0 5px" }}
            alt="searchicon"
            src="img/headercart.png"
          />
        </a>
      </div>
    </>
  );
};

export default HeaderIcons;
