
import styles from "./app.module.css";
import Modal from "components/modals/modal"
import { useState } from "react";



const App = (): JSX.Element => {
  const [ modalState, setModalState ] = useState(false)
  const openState = () => {
    setModalState(true)
    console.log(modalState)
  }
  return (
    <main className={styles.main}>
      <button className="w-5 h-3 bg-white" onClick={openState} >
        modal button
      </button>
      <div className="">
        <Modal {...{ isOpen: modalState, setModalState:setModalState }}></Modal>
      </div>
    </main>
  );
};

export default App;
