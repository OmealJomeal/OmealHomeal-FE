import React, { useState } from "react";
import axios from "axios";

const SingIn = () => {
  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const axios_post = () => {
    const data = {
      email: { email },
      age: { password },
    };
    axios
      .post("http://localhost:8080/api/login", data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      이메일<input onChange={onChangeEmail} value={email}></input>
      <br />
      <br />
      비밀번호<input onChange={onChangePassword} value={password}></input>
      <br />
      <br />
      <button onClick={axios_post}>로그인</button>
    </>
  );
};

export default SingIn;
