import React, { MouseEventHandler,useState } from 'react'
import { Modal,Button,Form } from 'react-bootstrap';
import { createType } from '../http/deviceApi';

interface CreateTypeProps{
    show: boolean;
    onHide: MouseEventHandler<HTMLButtonElement>;
}

const CreateType: React.FC<CreateTypeProps> = ({show,onHide}) => {
    const [value,setValue] = useState<any>('');

    const addType = (e: any) => {
        createType({name: value}).then(data => setValue(''));
        onHide(e);
    };



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
                <Form.Control onChange={e => setValue(e?.target?.value)} value={value} placeholder={"Enter the type name"}/>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='outline-danger' onClick={onHide}>Close</Button>
            <Button variant='outline-success' onClick={e => addType(e)}>Create</Button>
          </Modal.Footer>
        </Modal>
      );    
}

export default CreateType
