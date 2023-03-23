import React, { Component } from "react";
import Main from "./component/Main";

const App = () => {
  const names = [
    { userName: "권소영", age: 19 },
    { userName: "김소영", age: 28 },
    { userName: "나소영", age: 36 },
  ];
  // const로 선언하면안된다! >> let으로 선언하자!
  let nameList = names.filter((v) => v.age < 30);
  nameList = nameList.map((v) => <Main name={v.userName} age={v.age} />);

  return <div>{nameList}</div>;
};

export default App;
