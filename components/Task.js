import React from "react";
import newpage from "../styles/Main.module.css";

const Task = (props) => {
  return (
    <div className={newpage.box}>
      <hi className={newpage.id}>{props.id}</hi>
      <h2 className={newpage.name}>{props.name}</h2>
      <h3 className={newpage.email}>{props.email}</h3>
    </div>
  );
};

export default Task;
