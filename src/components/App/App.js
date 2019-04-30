import React from "react";
import Aside from "./Aside/Aside";
import Main from "./Main/Main";
import styles from "./App.module.css";

const App = () => (
  <div className={styles.app}>
    <Aside header="Todo App" comment="Simple todo app with comments" />
    <Main />
  </div>
);

export default App;
