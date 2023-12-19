
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function AddModal({show, handleClose}) {


  return (
    <>
      

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Appointmen for drname</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
               <Form.Group className="mb-3" controlId="name">
                <Form.Label>Patient className</Form.Label>
                <Form.Control type="email" placeholder="Enter name" required />
                
      </Form.Group>

          <Form.Group className="mb-3" controlId="date">
          <Form.Label>Date</Form.Label>
          <Form.Control type="datetime-local" placeholder="Date" required/>
      </Form.Group>
      <div className='text-center'>
          <Button variant="success" type="submit" className='me-2'>
           Save
          </Button>
          <Button variant="danger" type='button' onClick={handleClose}>
           Close
          </Button>
        </div>
      
        </Form>
    </Modal.Body>
        
      </Modal>
    </>
  );
}

export default AddModal;