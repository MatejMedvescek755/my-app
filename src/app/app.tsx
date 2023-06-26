
import styles from "./app.module.css";
import Modal from "components/modals/modal"
import { useState } from "react";



const App = (): JSX.Element => {
  const [ modalState, onToggle ] = useState(false)
  const openState = () => {
    onToggle(true)
  }
  return (
    <main className={styles.main}>
      <div>
      <button className="w-5 h-3 bg-white" onClick={openState} >
        modal button
      </button>
      </div>
        <Modal {...{isOpen:modalState, title:"Authentication", onToggle:onToggle, fields:["email","password","confirm password"] }}></Modal>
    </main>
  );
};

export default App;
