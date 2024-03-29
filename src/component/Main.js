import React from "react";
import { Link } from "react-router-dom";

const Main = (props) => {
  return (
    <>
      <h3>안녕하세요. 메인페이지입니다.</h3>
      <ul>
        <Link to="/product/1">
          <li>1번 상품</li>
        </Link>
        <Link to="/product/2">
          <li>2번 상품</li>
        </Link>
      </ul>
    </>
  );
};

export default Main;
