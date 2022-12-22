import React, { MouseEventHandler,useState } from 'react'
import { Modal,Button,Form } from 'react-bootstrap';
import {createBrand} from "../http/deviceApi"


interface CreateBrandProps{
    show: boolean;
    onHide: () => void;
}

const CreateBrand: React.FC<CreateBrandProps> = ({show,onHide}) => {
    const [value,setValue] = useState<string | undefined>('');

    const addBrand = () => {
      createBrand({name: value}).then(() => {
          setValue('')
          onHide()
      })
  }
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
                <Form.Control
                        value={value}
                        onChange={e => setValue(e?.target?.value)}
                        placeholder={"Введите название типа"}/>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='outline-danger' onClick={onHide}>Close</Button>
            <Button variant='outline-success' onClick={addBrand}>Create</Button>
          </Modal.Footer>
        </Modal>
      );
}

export default CreateBrand
