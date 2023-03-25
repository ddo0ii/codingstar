import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

// sample url : http://localhost:3000/product/1?search=productName&q=demo#test
const Product = () => {
  const productId = useParams().productId;
  const [searchParams, setSearchParams] = useSearchParams();
  const keyWords = searchParams; // 얘는 에러남..ㅠ
  const keyWord = searchParams.get("search");
  return (
    <>
      <h3>{productId}번 상품 페이지 입니다.</h3>
      <ul>
        <li>keyWords: {keyWords}</li>
        <li>keyWord: {keyWord}</li>
      </ul>
    </>
  );
};

export default Product;
