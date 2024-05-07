import React from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const Logout = ({ setAuthenticate }) => {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate("/");
  };
  const goToLogin = () => {
    navigate("/login");
  };
  setAuthenticate(false);
  console.log("로그아웃 됐나?");

  return (
    <>
      <div className="logout-button">정상적으로 로그아웃 되었습니다.</div>
      <div className="logout-button2">
        <Button variant="dark" onClick={goToMain}>
          Main
        </Button>{" "}
        &nbsp;
        <Button variant="dark" onClick={goToLogin}>
          로그인
        </Button>
      </div>
    </>
  );
};

export default Logout;
