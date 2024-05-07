import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

const Login = ({ setAuthenticate }) => {
  const navigate = useNavigate();

  const loginUser = (event) => {
    event.preventDefault();
    console.log("로그인됐나?");
    setAuthenticate(true);
    navigate("/");
  };

  return (
    // 사이즈를 가운데로 맞춰주는 것? Container!
    // 이 프로젝트에서는 아이디, 비번 입력하면 로그인 되는걸로 가정 (백엔드에서 진행되는 실제 데이터 만들지 않고)

    // Form 은, 입력받은 정보를 백엔드로 보내고 싶을 때 사용
    // Form형태에서는 login버튼을 누르면 refresh된다. 왜? 그냥 클릭이벤트와는 다르게 정보를 가져와서 뿌려주니까 리렌더링이 되는것
    // 그럼 이 refresh를 막아줘야하는데, 어떻게?
    // Form 자체에 event라는 기능이 있다. event를 loginUser함수의 props로 주어 event.preventDefault() 처리 해주면 된다.
    // ** Form을 쓸때는 event.preventDefault()를 쓰자.

    <Container>
      <Form onSubmit={(event) => loginUser(event)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>ID</Form.Label>
          <Form.Control type="email" placeholder="Enter ID" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="danger" type="submit">
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
