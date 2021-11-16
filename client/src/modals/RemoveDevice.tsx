import React, { MouseEventHandler } from 'react'
import { Modal,Button,Form } from 'react-bootstrap';

interface RemoveDeviceProps{
    show: boolean;
    onHide?: MouseEventHandler<HTMLButtonElement>;
}

const RemoveDevice: React.FC<RemoveDeviceProps> = ({show,onHide}) => {
    return (
        <Modal
          show={show}
          onHide={onHide}
          size="lg"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Remove device
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
                <Form.Control placeholder={"Enter the device id"}/>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='outline-danger' onClick={onHide}>Close</Button>
            <Button variant='outline-success' onClick={onHide}>Remove</Button>
          </Modal.Footer>
        </Modal>
      );    
}

export default RemoveDevice