import React, { useState } from "react";
import styled from "styled-components";
import PopupDom from "./PopupDom";
import PopupPostCode from "./PopupPostCode";
import CheckBox from "../../common/checkbox/CheckBox";
import "./radio.css";
import "../../common/checkbox/checkbox.css";

const InputBox = styled.input`
  display: block;
  width: 400px;
  height: 14px;
  padding: 17px 0px 18px 16px;
  border-radius: 4px;
  border: solid 0.7px #ddd;
  margin: 8px 0px;
  &:focus {
    background-color: #e8f0fe;
    outline: none;
  }
`;
const Button = styled.button`
  display: block;
  width: 400px;
  height: 54px;
  padding: 16px 141px;
  border-radius: 3px;
  border: solid 1px ${(props) => props.theme.maincolor};
  background-color: white;
  color: ${(props) => props.theme.maincolor};
  margin: 7px 0px;
  font-weight: bold;
  &:hover {
    background-color: ${(props) => props.theme.maincolor};
    outline: none;
    color: white;
  }
`;

const MiniButton = styled(Button)`
  width: 150px;
  height: 50px;
  padding: 16px 0px;
  margin: 7px 10px;
`;

const SignUpButton = styled.button`
  width: 350px;
  height: 56px;
  flex-grow: 0;
  margin: 20px auto 0px auto;
  padding: 17px 91px;
  border-radius: 3px;
  background-color: #5f0080;
  color: white;
  font-weight: bold;
`;

const Box = styled.div`
  width: 150px;
  height: 50px;
  padding: 16px 0px;
  margin: 7px 10px;
`;

const Line = styled.div`
  width: 840px;
  height: 1.5px;
  background-color: #333;
  margin-bottom: 50px;
`;

const Indicator = styled.div`
  width: 100px;
  margin: 17px 40px 17px 0px;
  font-size: 15px;
`;

const UnitBox = styled.div`
  width: 700px;
  height: 80px;
  margin: 0px auto;
  display: flex;
`;

const SelectBox = styled.label`
  display: inline-block;
  width: 160px;
  margin: 0px 10px;
  height: 40px;
`;

const SingUp = () => {
  const [value, setValue] = useState({
    email: "",
    password: "",
    name: "",
    phoneNumber: "",
    // lifestyle
    livealone: 0,
    child: 0,
    worker: 0,
    couple: 0,
    homemaker: 0,
    babay: 0,
    // interest
    pet: 0,
    outdoor: 0,
    health: 0,
    baking: 0,
    cooking: 0,
    babycare: 0,
    // food_favor
    sweetness: 0,
    bitter: 0,
    sour_taste: 0,
    salty: 0,
    spicy: 0,
  });

  const onChangeHandler = (e) => {
    setValue((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const onToggle = (e) => {
    setValue((prevState) => {
      console.log(prevState);
      switch (e.target.name) {
        case "livealone":
          return { ...prevState, [e.target.name]: !prevState.livealone };
        case "child":
          return { ...prevState, [e.target.name]: !prevState.child };
        case "worker":
          return { ...prevState, [e.target.name]: !prevState.worker };
        case "homemaker":
          return { ...prevState, [e.target.name]: !prevState.homemaker };
        case "baby":
          return { ...prevState, [e.target.name]: !prevState.baby };
        case "pet":
          return { ...prevState, [e.target.name]: !prevState.pet };
        case "outdoor":
          return { ...prevState, [e.target.name]: !prevState.outdoor };
        case "health":
          return { ...prevState, [e.target.name]: !prevState.health };
        case "baking":
          return { ...prevState, [e.target.name]: !prevState.baking };
        case "cooking":
          return { ...prevState, [e.target.name]: !prevState.cooking };
        case "babycare":
          return { ...prevState, [e.target.name]: !prevState.babycare };
        case "sweetness":
          return { ...prevState, [e.target.name]: !prevState.sweetness };
        case "bitter":
          return { ...prevState, [e.target.name]: !prevState.bitter };
        case "sour_taste":
          return { ...prevState, [e.target.name]: !prevState.sour_taste };
        case "salty":
          return { ...prevState, [e.target.name]: !prevState.salty };
        case "spicy":
          return { ...prevState, [e.target.name]: !prevState.spicy };
        default:
          return;
      }
    });
  };

  const [user_address, setUserAddress] = useState("");
  const [checkPassword, setCheckPassword] = useState("");

  const onCheckPassWord = (e) => {
    setCheckPassword(e.target.value);
  };

  // < 주소 api >
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // 팝업창 열기
  const openPostCode = () => {
    setIsPopupOpen(true);
  };

  // 팝업창 닫기
  const closePostCode = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      <div style={{ width: "840px", margin: "0 auto" }}>
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
          회원가입
        </div>
        <Line></Line>
        <UnitBox>
          <Indicator>이메일</Indicator>
          <InputBox
            onChange={onChangeHandler}
            name="email"
            placeholder="예: marketkurly@kurly.com"
            type="email"
          ></InputBox>
          <MiniButton>중복 확인</MiniButton>
        </UnitBox>
        <UnitBox>
          <Indicator>비밀번호</Indicator>
          <InputBox
            onChange={onChangeHandler}
            name="password"
            placeholder="비밀번호를 입력해주세요"
            type="password"
          ></InputBox>
          <Box></Box>
        </UnitBox>
        <UnitBox>
          <Indicator>비밀번호 확인</Indicator>
          <InputBox
            onChange={onCheckPassWord}
            name="checkPassword"
            placeholder="비밀번호를 한번 더 입력해주세요"
            type="password"
          ></InputBox>
          <Box></Box>
        </UnitBox>
        <div
          style={{
            width: "700px",
            textAlign: "right",
            position: "relative",
            right: "90px",
            bottom: "20px",
            fontSize: "small",
          }}
        >
          {value.password === checkPassword
            ? "비밀번호가 일치합니다"
            : "비밀번호가 일치하지 않습니다"}
        </div>
        <UnitBox>
          <Indicator>이름</Indicator>
          <InputBox
            onChange={onChangeHandler}
            name="name"
            placeholder="이름을 입력해주세요"
          ></InputBox>
          <Box></Box>
        </UnitBox>
        <UnitBox>
          <Indicator>휴대폰</Indicator>
          <InputBox
            onChange={onChangeHandler}
            name="phoneNumber"
            placeholder="000-0000-0000"
            type="tel"
          ></InputBox>
          <Box></Box>
        </UnitBox>
        <UnitBox>
          <Indicator></Indicator>
          <Button onClick={openPostCode}>주소검색</Button>
          <Box></Box>
        </UnitBox>
        <UnitBox>
          <Indicator>주소</Indicator>
          <InputBox
            name="user_address"
            value={user_address}
            disabled
          ></InputBox>
          <Box></Box>
        </UnitBox>
        <div>
          <UnitBox>
            <Indicator>성별</Indicator>
            <div class="checks">
              <input type="radio" id="man" name="gender" value="0" />
              <label for="man">
                <div
                  style={{
                    width: "225px",
                    height: "80px",
                    lineHeight: "45px",
                    textAlign: "center",
                  }}
                >
                  남자
                </div>
              </label>
            </div>
            <div class="checks">
              <input type="radio" id="woman" name="gender" value="1" />
              <label for="woman">
                <div
                  style={{
                    width: "225px",
                    height: "80px",
                    lineHeight: "45px",
                    textAlign: "center",
                  }}
                >
                  여자
                </div>
              </label>
            </div>
            <Box></Box>
          </UnitBox>
          <UnitBox style={{ margin: "30px auto 60px auto" }}>
            <Indicator>라이프 스타일</Indicator>
            <div
              style={{
                width: "600px",
                justifyContent: "center",
              }}
            >
              <SelectBox>
                <CheckBox
                  onClick={onToggle}
                  type="checkbox"
                  name="livealone"
                  label="혼자 살아요"
                ></CheckBox>
              </SelectBox>
              <SelectBox>
                <CheckBox
                  onClick={onToggle}
                  type="checkbox"
                  name="livealone"
                  label="아이가 있어요"
                ></CheckBox>
              </SelectBox>
              <SelectBox>
                <CheckBox
                  onClick={onToggle}
                  type="checkbox"
                  name="livealone"
                  label="직장인이에요"
                ></CheckBox>
              </SelectBox>
              <SelectBox>
                <CheckBox
                  onClick={onToggle}
                  type="checkbox"
                  name="livealone"
                  label="커플이에요"
                ></CheckBox>
              </SelectBox>
              <SelectBox>
                <CheckBox
                  onClick={onToggle}
                  type="checkbox"
                  name="livealone"
                  label="가정주부에요"
                ></CheckBox>
              </SelectBox>
            </div>
          </UnitBox>
          <UnitBox style={{ margin: "60px auto" }}>
            <Indicator>관심 분야</Indicator>
            <div
              style={{
                width: "600px",
                justifyContent: "center",
              }}
            >
              <SelectBox>
                <CheckBox
                  onClick={onToggle}
                  type="checkbox"
                  name="pet"
                  label="반려 동물"
                ></CheckBox>
              </SelectBox>
              <SelectBox>
                <CheckBox
                  onClick={onToggle}
                  type="checkbox"
                  name="outdoor"
                  label="야외 활동"
                ></CheckBox>
              </SelectBox>
              <SelectBox>
                <CheckBox
                  onClick={onToggle}
                  type="checkbox"
                  name="health"
                  label="건강"
                ></CheckBox>
              </SelectBox>
              <SelectBox>
                <CheckBox
                  onClick={onToggle}
                  type="checkbox"
                  name="baking"
                  label="제과/제빵"
                ></CheckBox>
              </SelectBox>
              <SelectBox>
                <CheckBox
                  onClick={onToggle}
                  type="checkbox"
                  name="cooking"
                  label="요리"
                ></CheckBox>
              </SelectBox>
              <SelectBox>
                <CheckBox
                  onClick={onToggle}
                  type="checkbox"
                  name="babycare"
                  label="아기 돌보기"
                ></CheckBox>
              </SelectBox>
            </div>
          </UnitBox>
          <UnitBox style={{ margin: "60px auto" }}>
            <Indicator>음식 취향</Indicator>
            <div
              style={{
                width: "600px",
                justifyContent: "center",
              }}
            >
              <SelectBox>
                <CheckBox
                  onClick={onToggle}
                  type="checkbox"
                  name="sweetness"
                  label="달달한 맛"
                ></CheckBox>
              </SelectBox>
              <SelectBox>
                <CheckBox
                  onClick={onToggle}
                  type="checkbox"
                  name="bitter"
                  label="쓴 맛"
                ></CheckBox>
              </SelectBox>
              <SelectBox>
                <CheckBox
                  onClick={onToggle}
                  type="checkbox"
                  name="sour_taste"
                  label="신 맛"
                ></CheckBox>
              </SelectBox>
              <SelectBox>
                <CheckBox
                  onClick={onToggle}
                  type="checkbox"
                  name="salty"
                  label="짠 맛"
                ></CheckBox>
              </SelectBox>
              <SelectBox>
                <CheckBox
                  onClick={onToggle}
                  type="checkbox"
                  name="spicy"
                  label="매운 맛"
                ></CheckBox>
              </SelectBox>
            </div>
          </UnitBox>
          <UnitBox style={{ margin: "0px auto 150px auto" }}>
            <SignUpButton>가입하기</SignUpButton>
          </UnitBox>
          {/* 요소 쌓임 순서 방지 위해 이렇게 함! */}
          <div id="popupDom">
            {isPopupOpen && (
              <PopupDom>
                <PopupPostCode
                  setUserAddress={setUserAddress}
                  onClose={closePostCode}
                />
              </PopupDom>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SingUp;
