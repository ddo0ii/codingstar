import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Main from "./component/Main";
import Product from "./component/Product";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Main />
      <Product />
    </div>
  );
};

export default App;
