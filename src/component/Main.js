import React from "react";
import dummy from "../db/data.json";

const Main = (props) => {
  return (
    <div>
      {dummy.users.map((user) => (
        <h3 key={user.userName}>
          안녕하세요. {user.userName}({user.age}) 입니다.
        </h3>
      ))}
    </div>
  );
};
export default Main;
