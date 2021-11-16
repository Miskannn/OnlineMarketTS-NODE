import React, { MouseEventHandler,useState } from 'react'
import { Modal,Button,Form, Dropdown,Row,Col } from 'react-bootstrap';
import deviceStore from "../store/deviceStore"
import { IInfo } from '../types/deviceTypes';



interface CreateDeviceProps{
    show: boolean;
    onHide?: MouseEventHandler<HTMLButtonElement>;
}



const CreateDevice: React.FC<CreateDeviceProps> = ({show,onHide}) => {
    const device = deviceStore;
    const [info,setInfo] = useState<IInfo[]>([]);

    const addInfo = () => setInfo([...info, {title: '',description: '',number: Date.now()}])
    const removeInfo = (infoNumber: number) => setInfo(info.filter(info => infoNumber !== info.number))
   
    return (
        <Modal
          show={show}
          onHide={onHide}
          size="lg"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Create new device
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form className='d-flex'>
                <Dropdown>
                   <Dropdown.Toggle variant={'outline-success'}>Choose a type</Dropdown.Toggle>
                   <Dropdown.Menu>
                     {device.types.map(item => <Dropdown.Item key={item.id}>{item.name}</Dropdown.Item>)}
                   </Dropdown.Menu>
                </Dropdown>
                <Dropdown className='ms-1'>
                   <Dropdown.Toggle variant={'outline-success'}>Choose a brand</Dropdown.Toggle>
                   <Dropdown.Menu>
                     {device.brands.map(item => <Dropdown.Item key={item.id}>{item.name}</Dropdown.Item>)}
                   </Dropdown.Menu>
                </Dropdown>
                <Form className="d-flex flex-column">
                 <Form.Control className="ms-1" placeholder='Enter device name...'/>
                 <Form.Control type="number" className="ms-1 mt-1" placeholder='Enter device price...'/>
                 <Form.Control type="file" className="ms-1 mt-1" placeholder='Device photo'/>
                 <br />
                 <Button onClick={addInfo} variant={'outline-dark'}>Create new property</Button>
                 {info.map(item =>
                 <Row key={item.number} className='mt-1'>
                   <Col xs={4} sm={4} md={4} lg={4}><Form.Control placeholder="Enter property name"></Form.Control></Col>
                   <Col xs={4} sm={4} md={4} lg={4}><Form.Control placeholder="Enter property description"></Form.Control></Col>
                   <Col xs={4} sm={4} md={4} lg={4}><Button variant="outline-danger" onClick={() => removeInfo(item.number)}>Remove</Button></Col>
                 </Row>)}
                </Form>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='outline-danger' onClick={onHide}>Close</Button>
            <Button variant='outline-success' onClick={onHide}>Create</Button>
          </Modal.Footer>
        </Modal>
      );    
}

export default CreateDevice

