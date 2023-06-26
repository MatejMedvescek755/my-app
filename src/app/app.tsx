
import styles from "./app.module.css";
import Modal from "components/modals/modal"
import { useState } from "react";



const App = (): JSX.Element => {
  const [ modalState, setModalState ] = useState(false)
  const openState = () => {
    setModalState(true)
  }
  return (
    <main className={styles.main}>
      <button className="w-5 h-3 bg-white" onClick={openState} >
        modal button
      </button>
      <div className="">
        <Modal {...{ isOpen: modalState, Title:"Authentication", setModalState:setModalState }}></Modal>
      </div>
    </main>
  );
};

export default App;
