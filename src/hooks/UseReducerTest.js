import React, { useReducer } from "react";
// init 함수를 사용하지 않는 counter 예시
function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + action.payload };
    case "DECREMENT":
      return { count: state.count - action.payload };
    default:
      throw new Error("unsupported action type: ", action.type);
  }
}

const UseReducerTest = () => {
  const initialState = { count: 0 };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h2>{state.count}</h2>
      <button onClick={() => dispatch({ type: "INCREMENT", payload: 1 })}>
        증가
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT", payload: 1 })}>
        감소
      </button>
      <button onClick={() => dispatch({ type: "kkkkkk", payload: 1 })}>
        에러
      </button>
    </>
  );
};
export default UseReducerTest;
