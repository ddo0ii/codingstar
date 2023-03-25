import React, { useEffect, useState } from "react";

function UseEffectTest() {
  const [count, setCount] = useState(0);
  const countUp = () => setCount(count + 1);

  useEffect(() => {
    console.log("useEffect!!", count);
  }, []);
  return (
    <div>
      <p>{count}번 클릭!</p>
      <button onClick={countUp}>Click Me</button>
    </div>
  );
}

export default UseEffectTest;
