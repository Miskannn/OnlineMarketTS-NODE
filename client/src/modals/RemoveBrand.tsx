import React, { MouseEventHandler } from 'react'
import { Modal,Button,Form } from 'react-bootstrap';

interface RemoveBrandProps{
    show: boolean;
    onHide?: MouseEventHandler<HTMLButtonElement>;
}

const RemoveBrand: React.FC<RemoveBrandProps> = ({show,onHide}) => {
    return (
        <Modal
          show={show}
          onHide={onHide}
          size="lg"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Remove brand
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
                <Form.Control placeholder={"Enter the brand id"}/>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='outline-danger' onClick={onHide}>Close</Button>
            <Button variant='outline-success' onClick={onHide}>Remove</Button>
          </Modal.Footer>
        </Modal>
      );    
}

export default RemoveBrand
