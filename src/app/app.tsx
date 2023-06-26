
import styles from "./app.module.css";
import Modal from "components/modals/modal"
import { useState } from "react";



const App = (): JSX.Element => {
  const [ modalState, onToggle ] = useState(false)
  const openState = () => {
    onToggle(true)
  }
  const fields = [
    {
      key:"1",
      type:"text",
      title:"email",
      size:"20rem"
    },
    {
      key:"2",
      type:"password",
      title:"password",
      size:"20rem"
    },
    {
      key:"3",
      type:"password",
      title:"confirm password",
      size:"20rem"
    },
    {
      key:"5",
      type:"plain text",
      title:"random text",
      size:"30rem"
    },
    {
      key:"4",
      type:"button",
      title:"confirm",
      size:"20rem",
      action:onToggle
    }
  ]

  return (
    <main className={styles.main}>
      <div>
      <button className="w-5 h-3 bg-white" onClick={openState} >
        modal button
      </button>
      </div>
        <Modal {...{isOpen:modalState, title:"Authentication", onToggle:onToggle, fields:fields }}></Modal>
    </main>
  );
};

export default App;