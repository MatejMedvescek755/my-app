import { ModalProps } from "./index"


const Modal = (props: ModalProps) => {
    const changeState = () =>{
        props.setModalState(false)
    }

    return (
        <dialog open={props.isOpen} className=" bg-white border-1-black absolute top-20 left-50">
            <div className="h-20 pt-4 pb-4">
                <p className="">{props.Title}</p>
                <form method="dialog">
                    <button className="p-2" onClick={changeState}>confirm
                    </button>
                </form>
            </div>
        </dialog>
    );
}


export default Modal;