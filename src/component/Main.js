import React, { useState } from "react";

const Main = () => {
  const [myName, setMyName] = useState("KwonSoYeong");
  function changeName() {
    setMyName(myName === "KwonSoYeong" ? "KimSoYeong" : "KwonSoYeong");
  }
  return (
    <div>
      <h1>안녕하세요 {myName}</h1>
      <button onClick={changeName}>Change</button>
    </div>
  );
};

export default Main;
