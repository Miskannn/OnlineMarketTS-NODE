import React, { MouseEventHandler } from 'react'
import { Modal,Button,Form } from 'react-bootstrap';

interface CreateBrandProps{
    show: boolean;
    onHide?: MouseEventHandler<HTMLButtonElement>;
}

const CreateBrand: React.FC<CreateBrandProps> = ({show,onHide}) => {
    return (
        <Modal
          show={show}
          onHide={onHide}
          size="lg"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Create new brand
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
                <Form.Control placeholder={"Enter the brand name"}/>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='outline-danger' onClick={onHide}>Close</Button>
            <Button variant='outline-success' onClick={onHide}>Create</Button>
          </Modal.Footer>
        </Modal>
      );    
}

export default CreateBrand
