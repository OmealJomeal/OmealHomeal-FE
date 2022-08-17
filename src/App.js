import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./common/header/Header";
import NavBar from "./common/navbar/NavBar";
import Main from "./pages/main/Main";
import MyPage from "./pages/mypage/MyPage";
import SingIn from "./pages/signin/SingIn";
import SingUp from "./pages/singup/SingUp";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="signin" element={<SingIn />}></Route>
          <Route path="signup" element={<SingUp />}></Route>
          <Route path="/mypage" element={<MyPage />}></Route>
          <Route path="signin" element={<SingIn />}></Route>
          <Route path="signup" element={<SingUp />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
