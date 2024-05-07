import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

import React from "react";

const NavBar = ({ authenticate }) => {
  const menuList = [
    "여성",
    "Devided",
    "남성",
    "신생아/유아",
    "아동",
    "H&M Home",
    "Sale",
    "지속가능성",
  ];
  // 원하는 페이지로 이동을 위해서는? useNavigate 사용
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate("/login");
  };

  const goToLogout = () => {
    navigate("/logout");
  };

  const goToMain = () => {
    navigate("/");
  };
  console.log("로그인여부확인!!!", authenticate);
  const search = (event) => {
    if (event.key === "Enter") {
      // 입력한 검색어를 읽어와서 (여기서는 읽어올 값이 event에 들어있다. 그래서 event.target.value로 input태그의 value값을 가져온다.)
      let keyword = event.target.value;
      // url을 바꿔준다.
      // 쿼리값을 추가해주는 거니까 ?q=
      // (검색 키워드를 가져와서 url에 추가해주는 작업)
      navigate(`/?q=${keyword}`);
    }
  };

  return (
    <div>
      <div className="login-button">
        <FontAwesomeIcon icon={faUser} /> &nbsp;
        {!authenticate ? (
          <div onClick={goToLogin}> 로그인</div>
        ) : (
          <div onClick={goToLogout}> 로그아웃</div>
        )}
      </div>

      <div className="nav-section">
        <img
          className="main-logo"
          width={100}
          onClick={goToMain}
          src="data:image/png;base64,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"
        />
      </div>

      <div className="menu-area">
        <ul className="menu-list">
          {menuList.map((menu) => (
            <li>{menu}</li>
          ))}
        </ul>
        <span className="menu-search">
          <div>
            <FontAwesomeIcon icon={faSearch} />
            <input
              type="text"
              placeholder="Search Item"
              onKeyDown={(event) => search(event)}
            />
          </div>
        </span>
      </div>
    </div>
  );
};

export default NavBar;
