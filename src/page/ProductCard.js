import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/product/${item.id}`);
    // 문제는 문자열 템플릿 리터럴을 올바르게 사용하지 않았기 때문
    // ${}를 사용하여 변수나 표현식을 문자열에 삽입할 때는 백틱(`)으로 묶어야 한다. 작은 따옴표로 하면 출력안된다.
  };
  return (
    <div className="card" onClick={showDetail}>
      {/* item? 문법은 item이 null이거나 undefined일 때에도 안전하게 해당 속성에 접근할 수 있다 */}
      <img src={item?.img} />
      <div>{item?.choice === true ? "Concious choice" : ""}</div>
      <div>{item?.title}</div>
      <div>￦ {item?.price}</div>
      <div>{item?.new === true ? "신제품" : ""}</div>
    </div>
  );
};

export default ProductCard;
