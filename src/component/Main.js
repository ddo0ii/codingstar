import React, { useState } from "react";

const Main = () => {
  const [cnt, setCnt] = useState(0);
  // const updateCnt = () => setCnt(cnt + 1);
  // const clearCnt = () => setCnt(0);
  return (
    <div>
      클릭한 횟수는 {cnt}번입니다.
      <div>
        <button onClick={() => setCnt((prevCnt) => prevCnt + 1)}>
          클릭해 보세요!
        </button>
        <button onClick={() => setCnt(0)}>초기화 하기</button>
      </div>
    </div>
  );
};

export default Main;
