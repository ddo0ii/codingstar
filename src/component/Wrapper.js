import React from "react";

function Wrapper({ children }) {
  const style = {
    backgroundColor: "yellow",
  };

  return <div style={style}>{children}</div>;
}

export default Wrapper;
