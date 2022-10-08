import React, { useEffect, useState } from "react";
import newpage from "../styles/Main.module.css";
import Task from "../components/Task";
function Main() {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((responce) => responce.json())
      .then((app) => setArray(app));
  }, []);

  const [array, setArray] = useState([]);

  return (
    <div className={newpage.originaldiv}>
      <header className={newpage.taskheader}>
        <h1 className={newpage.taskdetails}> DETAILS</h1>
      </header>
      <div className={newpage.maindiv}>
        {array.map((singledata) => {
          return (
            <Task
              name={singledata.name}
              id={singledata.id}
              email={singledata.email}
            />
          );
        })}
      </div>
    </div>
  );
}
export default Main;
