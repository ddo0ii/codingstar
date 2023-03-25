import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const Product = () => {
  const productId = useParams().productId;
  const navigate = useNavigate();
  // Link 컴포넌트를 사용하지 않고 다른 페이지로 이동을 해야 하는 경우, 뒤로가기 등에 사용하는 Hook 이다.
  // replace 옵션을 사용하면 페이지를 이동할 때 히스토리를 남기지 않는다.
  return (
    <>
      <h3>{productId}번 상품 페이지 입니다.</h3>
      <ul>
        <li>
          <button onClick={() => navigate(-2)}>Go 2 pages back</button>
        </li>
        <li>
          <button onClick={() => navigate(-1)}>Go back</button>
        </li>
        <li>
          <button onClick={() => navigate(1)}>Go forward</button>
        </li>
        <li>
          <button onClick={() => navigate(2)}>Go 2 pages forward</button>
        </li>
        <li>
          <button onClick={() => navigate("/")}>Go Root</button>
        </li>
        <li>
          <button onClick={() => navigate("/", { replace: true })}>
            Go Root{" "}
          </button>
        </li>
      </ul>
    </>
  );
};

export default Product;
