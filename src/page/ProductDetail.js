import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  let { id } = useParams();

  const [product, setProduct] = useState(null);

  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/ChloeJS/cjs-hnm/products/${id}`;
    // fetch란?
    // 자바스크립트 내장 객체 (API 호출하는 역할)
    //
    let response = await fetch(url);
    let data = await response.json();
    console.log("data?? ", data);
    setProduct(data); // 데이터 저장
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <Container>
      <Row>
        <Col className="product-img">
          <img src={product?.img} />
        </Col>
        <Col>
          <div className="product-title">{product?.title} </div>
          <div className="product-price">￦ {product?.price}</div>
          <div className="product-choice">
            {product?.choice === true ? "Concious choice" : ""}
          </div>
          <div className="product-new">
            {product?.new === true ? "신제품" : ""}
          </div>
          <div className="product-size-dropdown">
            <Dropdown>
              <Dropdown.Toggle variant="dark" id="dropdown-basic">
                사이즈 선택
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">S</Dropdown.Item>
                <Dropdown.Item href="#/action-2">M</Dropdown.Item>
                <Dropdown.Item href="#/action-3">L</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="product-add-button">
            <Button variant="dark" size="large" fullWidth>
              추가
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
