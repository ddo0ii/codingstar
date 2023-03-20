import React, { useState } from "react";

const Main = () => {
  // let myName = "KwonSoYeong"; // useState를 사용하여 변경
  const [myName, setMyName] = useState("KwonSoYeong");

  function changeName() {
    // myName = myName === "KwonSoYeong" ? "KimSoYeong" : "KwonSoYeong";
    // console.log(myName);
    // document.getElementById("name").innerText = myName;
    setMyName(myName === "KwonSoYeong" ? "KimSoYeong" : "KwonSoYeong");
  }

  return (
    <div>
      <h1>안녕하세요. {myName} 입니다.</h1>
      <button onClick={changeName}>Change</button>
    </div>
  );
};

export default Main;
