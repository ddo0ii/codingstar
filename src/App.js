import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Main from "./component/Main";
import NotFound from "./component/NotFound";
import Product from "./component/Product";
import UseEffectTest from "./hooks/UseEffectTest";
import UseReducerTest from "./hooks/UseReducerTest";
import UseReducerTestInit from "./hooks/UseReducerTestInit";

const App = () => {
  return (
    <div className="App">
      <UseEffectTest />
      <UseReducerTest />
      <UseReducerTestInit />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/product/:productId" element={<Product />}></Route>
          {/* 엘리먼트의 상단에 위치하는 라우트들의 규칙을 모두 확인하고, 일치하는 라우트가 없다면 이 라우트가 화면에 나타나게 됩니다. */}
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
