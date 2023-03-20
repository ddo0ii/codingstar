import React, { useState } from "react";

const Main = () => {
  const [state, setState] = useState({ cnt: 0 });
  const updateCnt = (val) =>
    setState({
      ...state,
      [val]: state[val] + 1,
    });
  const { cnt } = state;
  return (
    <div>
      클릭한 횟수는 {cnt}번 입니다.
      <div>
        <button onClick={updateCnt.bind(null, "cnt")}>클릭해 보세요!</button>
      </div>
    </div>
  );
};

export default Main;
