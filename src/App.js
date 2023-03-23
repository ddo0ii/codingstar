import React from "react";
import Main from "./component/Main";
import styles from "./App.module.css";

const App = () => {
  return (
    <div>
      <Main />
      <h3 className={styles.nameBox}>안녕하세요. 권소영입니다.</h3>
    </div>
  );
};

export default App;
