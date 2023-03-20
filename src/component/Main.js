import React from "react";

const Main = () => {
  let myName = "KwonSoYeong";

  function changeName() {
    myName = myName === "KwonSoYeong" ? "KimSoYeong" : "KwonSoYeong";
    console.log(myName);
    document.getElementById("name").innerText = myName;
  }

  return (
    <div>
      <h1>
        안녕하세요. <span id="name">{myName}</span> 입니다.
      </h1>
      <button onClick={changeName}>Change</button>
    </div>
  );
};

export default Main;
