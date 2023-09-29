import Modal from 'react-bootstrap/esm/Modal';
import Button from 'react-bootstrap/esm/Button';
function ModalDeleting({show, setShow, handleClose, handleShow, setConfirmDeleting}) {
    function handleConfirmDeleting(){
      setConfirmDeleting(true);
      handleClose();
    }
    return (
      <div
        className="modal show"
        style={{ display: 'block', position: 'initial' }}
      >
        <Modal show={show} onHide={handleClose}>
          <Modal.Dialog>
            <Modal.Header closeButton>
              <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>
    
            <Modal.Body>
              <p>Are you shure you want to delete this user? It may doing his life much more worth</p>
            </Modal.Body>
    
            <Modal.Footer>
              <Button variant="secondary"  onClick={handleClose}>Close</Button>
              <Button variant="primary" onClick={handleConfirmDeleting}>YES!!!!</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal>
      </div>
    );
  }
  
  export default ModalDeleting;