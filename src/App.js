import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { ThemeProvider } from "styled-components";
import theme from "./theme";

import Header from "./common/header/Header";
import NavBar from "./common/navbar/NavBar";
import Main from "./pages/main/Main";
import MyPage from "./pages/mypage/MyPage";
import SingIn from "./pages/signin/SingIn";
import SingUp from "./pages/singup/SingUp";
import Cart from "./pages/carts/Cart";

function App() {
  return (
    <>
      <div className="AppFonts">
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Header />
            <NavBar />
            <Routes className="App">
              <Route path="/" element={<Main />}></Route>
              <Route path="signin" element={<SingIn />}></Route>
              <Route path="signup" element={<SingUp />}></Route>
              <Route path="mypage" element={<MyPage />}></Route>
              <Route path="signin" element={<SingIn />}></Route>
              <Route path="signup" element={<SingUp />}></Route>
              <Route path="cart" element={<Cart />}></Route>
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </div>
    </>
  );
}

export default App;
