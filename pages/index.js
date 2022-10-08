import { useRouter } from "next/router";
import React from "react";
import styles from "../styles/Home.module.css";
import Main from "./Main";
import Header from "../components/Header";
import Detail from "../components/Details";
function App() {
  const router = useRouter();
  return (
    <div className={styles.button}>
      <Header />
      <Detail />
      <button onClick={() => router.push("/Main")} className={styles.click}>
        click
      </button>
    </div>
  );
}
export default App;
