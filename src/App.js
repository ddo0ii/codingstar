import React, { Component } from "react";
import Main from "./component/Main";

const App = () => {
  const names = [
    { userName: "권소영", age: 19 },
    { userName: "김소영", age: 28 },
    { userName: "나소영", age: 36 },
  ];
  const nameList = names.map((v) => (
    <Main key={v.userName} name={v.userName} age={v.age} />
  ));

  return <div>{nameList}</div>;
};

export default App;
