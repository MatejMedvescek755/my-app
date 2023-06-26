import State, { ModalProps } from "./index"


const Modal = (state: ModalProps) => {
    return (
        <dialog open={state} className="w-16 bg-white border-1-black absolute top-20 left-50">
            <div className="h-20">
                <p>Greetings, one and all!</p>
                <form method="dialog">
                    <button>OK</button>
                </form>
            </div>
        </dialog>
    );
}


export default Modal;