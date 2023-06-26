import { ModalProps } from "./index"


const Modal = ({isOpen, fields, title}: ModalProps) => {

    return (
        <dialog open={isOpen} className=" bg-white border-1-black absolute top-20 left-50">
            <div className="h-20 pt-4 pb-4">
                <p className="">{title}</p>
                <form method="dialog">
                    <ul>
                        {fields.map(field =>
                            <li key={field.key}>
                                {field.type==="button" || field.title && <p>{field.title}</p>}
                                {
                                    field.type.includes("password") && <input type="password" /> ||
                                    field.type.includes("button") && <button className="border-2-black-solid" onClick={field.action} >{field.title}</button> ||
                                    field.type.includes("plain") || 
                                    <input type={field.type} className="border-2-black-solid" />
                                }
                            </li>)}                          
                    </ul>
                    
                </form>
            </div>
        </dialog>
    );
}


export default Modal;