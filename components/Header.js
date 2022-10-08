import React from "react";
import Headerpage from "../styles/Header.module.css";

function Header() {
  return (
    <header className={Headerpage.headerdiv}>
      <h1 className={Headerpage.headername}> Content</h1>
      <h1 className={Headerpage.headername}> info</h1>
      <h1 className={Headerpage.headername}>mail</h1>
    </header>
  );
}
export default Header;
