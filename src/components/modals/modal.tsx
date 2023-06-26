import State, { ModalProps } from "./index"


const Modal = (state: ModalProps) => {
    return (
        <dialog {...state} className="w-16 h-12 bg-white border-1-black absolute top-20 left-50">
            <p>Greetings, one and all!</p>
            <form method="dialog">
                <button>OK</button>
            </form>
        </dialog>
    );
}


export default Modal;