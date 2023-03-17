import React, { Component } from "react";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Main from "./component/Main";
import Wrapper from "./component/Wrapper";
function App() {
  return (
    <div>
      <Header />
      <Wrapper>
        <Main color="blue" />
      </Wrapper>
      <Footer />
    </div>
  );
}

export default App;
