import Modal from "./modal";

export interface ModalProps {
    isOpen: boolean;
    title:string;
    onToggle: React.Dispatch<React.SetStateAction<boolean>>;
    fields: Array<string>;
}

export default Modal