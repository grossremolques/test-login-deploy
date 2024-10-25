import { Modal, Button } from "react-bootstrap";
import { useModal } from "../context/components/ModalContext";
export function ModalComponent({title, body, btnText}) {
    const {show, handleClose} = useModal();
  return (
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{body}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            {btnText}
          </Button>
        </Modal.Footer>
      </Modal>
  );
}
