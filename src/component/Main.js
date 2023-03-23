import React, { useState } from "react";

const Main = () => {
  const [myName, setMyName] = useState("KwonSoYeong");
  function changName(e) {
    e.preventDefault();
    setMyName(myName === "KwonSoYeong" ? "KimSoYeong" : "KwonSoYeong");
  }
  return (
    <div>
      <h1>안녕하세요 {myName}</h1>
      <a href="#" onClick={changName}>
        Change
      </a>
    </div>
  );
};

export default Main;
