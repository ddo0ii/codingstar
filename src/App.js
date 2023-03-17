import React, { Component } from "react";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Main from "./component/Main";
function App() {
  return (
    <div>
      <Header />
      <Main name={9} color="blue" />
      <Footer />
    </div>
  );
}

export default App;
