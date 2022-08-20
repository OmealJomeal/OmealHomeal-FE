import React from "react";
import styled from "styled-components";
import CheckBox from "../../common/checkbox/CheckBox";
import { AiOutlineShopping } from "react-icons/ai";
import CartProduct from "./CartProduct";

const Cart = () => {
  const Line = styled.div`
    width: 740px;
    height: 1.5px;
    background-color: #333333;
    margin-bottom: 50px;
  `;

  const numbers = [1, 2, 3, 4, 5];

  const MapCartProduct = numbers.map((number) => <li>{number}</li>);

  return (
    <>
      <div style={{ width: "1050px", margin: "0 auto" }}>
        <div
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            width: "840px",
            textAlign: "center",
            marginTop: "100px",
            marginBottom: "50px",
          }}
        >
          장바구니
        </div>
        <div style={{ width: "1050px", height: "30px" }}></div>
        <div style={{ width: "1050px", height: "30px", display: "flex" }}>
          <CheckBox
            type="checkbox"
            name="cooking"
            label="전체 선택"
            style={{ margin: "2px 10px", color: "#333333" }}
          ></CheckBox>
          <div
            style={{
              width: "100px",
              height: "30px",
              margin: "2px 40px",
              lineHeight: "20px",
              color: "#333333",
            }}
          >
            선택 삭제
          </div>
        </div>
        <div style={{ width: "1050px", height: "10px" }}> </div>
        <Line style={{ margin: "20px 0px" }}></Line>
        <div style={{ width: "1050px", display: "flex" }}>
          <div style={{ width: "740px" }}>
            <div style={{ display: "flex" }}>
              <AiOutlineShopping
                style={{
                  width: "27px",
                  height: "27px",
                  border: "0.5px",
                  color: "#333333",
                }}
              />
              <div
                style={{
                  width: "150px",
                  height: "27px",
                  margin: "0px 10px",
                  color: "#333333",
                }}
              >
                상품 내역
              </div>
            </div>
            <CartProduct></CartProduct>
          </div>
          <div style={{ width: "310px" }}></div>
        </div>
      </div>
    </>
  );
};

export default Cart;
