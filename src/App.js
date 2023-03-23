import React, { Component } from "react";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Main from "./component/Main";
import Wrapper from "./component/Wrapper";

const App = () => {
  const names = ["권소영", "김소영", "나소영"];
  const nameList = names.map((name) => <Main name={name} />);
  return <div>{nameList}</div>;
};

export default App;
