import Modal from "./modal";

export interface ModalProps {
    isOpen: boolean;
    title:string;
    onToggle: React.Dispatch<React.SetStateAction<boolean>>;
    fields:Field[];
}

interface Field{
    type:string,
    title:string,
    size:string,
    key:string,
    action?:React.Dispatch<React.SetStateAction<boolean>>,
}

export default Modal