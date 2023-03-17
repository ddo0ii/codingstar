import React from "react";

function Main({ name, color }) {
  return (
    <div>
      <main>
        <h1 style={{ color }}>안녕하세요. {name} 입니다.</h1>
      </main>
    </div>
  );
}

export default Main;
