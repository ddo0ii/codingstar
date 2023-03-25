import { cleanup } from "@testing-library/react";
import React, { useEffect, useState } from "react";

function UseEffectTest() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("KwonSoYeong");
  const countUp = () => setCount(count + 1);
  const handleChangeName = (e) => setName(e.target.value);

  useEffect(() => {
    console.log("useEffect!!", count);
    return () => {
      // cleanup 함수
      // useEffect 안에서 return 할 때 실행 된다.(useEffect의 뒷정리를 한다.)
      // 만약 컴포넌트가 마운트 될 때 이벤트 리스너를 통해 이벤트를 추가하였다면 컴포넌트가 언마운트 될 때 이벤트를 삭제 해주어야 한다.
      // 그렇지 않으면 컴포넌트가 리렌더링 될 때마다 새로운 이벤트 리스너가 핸들러에 바인딩 될 것이다. 이는 자주 리렌더링 될 경우 메모리 누수가 발생할 수 있다.
      console.log("cleanup!!", count);
    };
  }, [count]);

  return (
    <div>
      <p>안녕하세요. {name} 입니다.</p>
      <input onChange={handleChangeName} />
      <p>{count}번 클릭!</p>
      <button onClick={countUp}>Click Me</button>
    </div>
  );
}

export default UseEffectTest;
