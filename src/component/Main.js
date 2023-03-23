import React, { useState } from "react";

const Main = () => {
  const [myName, setMyName] = useState("KwonSoYeong");
  return (
    <div>
      <h1>안녕하세요 {myName}</h1>
      <button
        onClick={() => {
          setMyName(myName === "KwonSoYeong" ? "KimSoYeong" : "KwonSoYeong");
        }}
      >
        Change
      </button>
    </div>
  );
};

export default Main;
