import React, { MouseEventHandler } from 'react'
import { Modal,Button,Form } from 'react-bootstrap';

interface CreateTypeProps{
    show: boolean;
    onHide?: MouseEventHandler<HTMLButtonElement>;
}

const CreateType: React.FC<CreateTypeProps> = ({show,onHide}) => {
    return (
        <Modal
          show={show}
          onHide={onHide}
          size="lg"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Create new type
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
                <Form.Control placeholder={"Enter the type name"}/>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='outline-danger' onClick={onHide}>Close</Button>
            <Button variant='outline-success' onClick={onHide}>Create</Button>
          </Modal.Footer>
        </Modal>
      );    
}

export default CreateType
