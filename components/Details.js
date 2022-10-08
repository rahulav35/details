import react from "react";
import detailspage from "../styles/Details.module.css";
function Detail() {
  return (
    <div className={detailspage.detailsdiv}>
      <h1 className={detailspage.welcome}>W E L C O M E </h1>
      <h2 className={detailspage.note}>
        For the further information of the registered persons,click the button
        below...
      </h2>
    </div>
  );
}
export default Detail;
