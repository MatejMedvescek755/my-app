import { ModalProps } from "./index"


const Modal = (props: ModalProps) => {
    const changeState = () =>{
        props.setModalState(false)
        console.log(false)
    }

    return (
        <dialog open={props.isOpen} className="w-16 bg-white border-1-black absolute top-20 left-50">
            <div className="h-20">
                <p>Greetings, one and all!</p>
                <form method="dialog">
                    <button onClick={changeState}>OK</button>
                </form>
            </div>
        </dialog>
    );
}


export default Modal;