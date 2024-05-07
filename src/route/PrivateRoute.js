import React from "react";
import { Navigate } from "react-router-dom";
import ProductDetail from "../page/ProductDetail";

const PrivateRoute = ({ authenticate }) => {
  // authenticate를 props로 넘겨줘서 현재 로그인 여부를 체크해서 상품디테일 페이지로 갈지, 로그인 페이지로 리다이렉트할지 정한다.
  // 리다이렉트 = <Navigate /> 컴포넌트
  return authenticate === true ? <ProductDetail /> : <Navigate to="/login" />;
};

export default PrivateRoute;
