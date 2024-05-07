import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import ProductCard from "./ProductCard";

const ProductAll = () => {
  // UI에 보여주는 것은 useState에 저장해야 한다.
  const [productList, setProductList] = useState([]);
  // url에 있는 쿼리값을 불러오기
  // useSearchParams는 useState처럼 쓰임
  const [query, setQuery] = useSearchParams();

  // db.json에 들어있는 데이터를 콘솔에서 확인 await 쓰려면 async 사용해야 함.
  const getProducts = async () => {
    // 쿼리값까지 가져왔는데 왜 실행이 안될까? 중요!! 왜? useEffect는 배열에 값이 없으면 맨처음에만 실행되기 때문!
    // 쿼리가 있으면 쿼리를 붙여서 데이터 검색하기 (20240502)
    // url에 있는 쿼리값을 불러오기
    let searchQuery = query.get("q") || "";
    // console.log("서치쿼리?", searchQuery);
    let url = `https://my-json-server.typicode.com/ChloeJS/cjs-hnm/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  };

  // api 호출은 어디서 한다? useEffect(() => {함수}, [배열])
  // 쿼리값이 바뀔 때마다 호출해야한다.
  useEffect(() => {
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return (
    <div>
      <Container>
        <Row>
          {productList?.map((menu) => (
            <Col lg={3}>
              <ProductCard item={menu} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
