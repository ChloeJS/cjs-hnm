import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./component/NavBar";
import Login from "./page/Login";
import Logout from "./page/Logout";
import ProductAll from "./page/ProductAll";
import PrivateRoute from "./route/PrivateRoute";

// 1. 전체상품 페이지, 로그인, 상품상세페이지
// - 리액트 라우터 설치
//  1-1. 네비게이션 바 (상단메뉴 고정)
// 2. 전체 상품페이지에서는 전체 상품을 볼 수 있다.
// - json-server 통해 db.json 파일에 있는 데이터를 넣어주고 확인한다.
// 3. 로그인 버튼을 누르면 로그인페이지가 나온다.
// 3. 상품디테일을 눌렀으나, 로그인이 안되어있을경우에는 로그인페이지가 먼저 나온다.
//    상품디테일은 로그인이 되어야 볼수 있고, -> private Route로 해결한다.?
// 4. 로그인이 되어있을 경우에는 상품 디테일 페이지를 볼 수 있다.
// 5. 로그아웃 버튼을 클릭하면 로그아웃이 된다.
// 5. 로그아웃이 되면 상품 디테일 페이지를 볼수 없다, 다시 로그인 페이지가 보인다.
// 6. 로그인을 하면 로그아웃이 보이고 로그아웃을 하면 로그인이 보인다.
// 7. 상품을 검색할 수 있다.

function App() {
  // 로그인한 유저인지 아닌지 체크 - false면 로그인 x, true면 로그인 O
  const [authenticate, setAuthenticate] = useState(false);
  // 로그인 여부 확인
  const [isLogin, setIsLogin] = useState(false);

  // authenticate값이 바뀌었는지 확인하려면, useEffect로 !
  // authenticate값이 바뀔 때마다 확인을 하려면,아래처럼
  useEffect(() => {
    console.log("로그인여부확인!!!", authenticate);
  }, [authenticate]);

  // 함수도 props처럼 보내줄 수 있다. ex) setAuthenticate

  return (
    <div>
      <NavBar authenticate={authenticate} />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route
          path="/login"
          element={<Login setAuthenticate={setAuthenticate} />}
        />
        <Route
          path="/product/:id"
          element={<PrivateRoute authenticate={authenticate} />}
        />
        <Route
          path="/logout"
          element={<Logout setAuthenticate={setAuthenticate} />}
        />
      </Routes>
    </div>
  );
}

export default App;
