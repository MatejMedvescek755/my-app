import Logos from "components/atoms/logos";
import Card from "components/organisms/card";
import {
  BeakerIcon,
  BookmarkIcon,
  CakeIcon,
  ChevronDownIcon,
  CubeTransparentIcon,
  FilmIcon,
  PhoneXMarkIcon,
  LockClosedIcon,
  Bars3Icon,
  PencilIcon,
  PhotoIcon,
} from "@heroicons/react/24/outline";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/solid";

import styles from "./app.module.css";
import Modal from "components/modals/modal"
import { useState } from "react";



const App = (): JSX.Element => {
  const [ modalState, setModalState ] = useState("close")
  const openState = () => {
    setModalState("open")
    console.log(modalState)
  }
  return (
    <main className={styles.main}>
      <button className="w-5 h-3 bg-white" onClick={openState} >
        modal button
      </button>
      <Modal {...{ state: modalState }}></Modal>
    </main>
  );
};

export default App;
