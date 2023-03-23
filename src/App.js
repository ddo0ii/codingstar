import React, { Component } from "react";
import Main from "./component/Main";

const App = () => {
  const names = [
    ["권소영", 19],
    ["김소영", 17],
    ["나소영", 12],
  ];
  const nameList = names.map((v) => <Main name={v[0]} age={v[1]} />);
  return <div>{nameList}</div>;
};

export default App;
