import { createContext, useContext, useState } from "react";
const ModalContext = createContext();
export const useModal = () => useContext(ModalContext);

export const ModalContextProvider = ({ children }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <ModalContext.Provider value={{show, handleClose, handleShow}}>
            {children}
        </ModalContext.Provider>
    )
}