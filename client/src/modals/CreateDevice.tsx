import React, { MouseEventHandler,useState,useContext } from 'react'
import { Modal,Button,Form, Dropdown,Row,Col } from 'react-bootstrap';
import { IBrand, IInfo, IType } from '../types/deviceTypes';
import {Context} from "../index"


interface CreateDeviceProps{
    show: boolean;
    onHide?: MouseEventHandler<HTMLButtonElement>;
}



const CreateDevice: React.FC<CreateDeviceProps> = ({show,onHide}) => {

    const {device} = useContext(Context);
    const [info,setInfo] = useState<IInfo[]>([]);
    const [name, setName] = useState<string>('');
    const [price,setPrice] = useState<number>(0);
    const [file,setFile] = useState<any>(null)


    const addInfo = () => setInfo([...info, {title: '',description: '',number: Date.now()}]);
    const removeInfo = (infoNumber: number) => setInfo(info.filter(info => infoNumber !== info.number));
    const selectFile = (e: React.ChangeEvent<HTMLInputElement>) => setFile(e.target?.files?.[0]); 

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
            <Dropdown className="mt-2 mb-2">
                   <Dropdown.Toggle>{device?.selectedType?.name || "Сhoose a type"}</Dropdown.Toggle>
                   <Dropdown.Menu>
                        {device.types.map((type: IType) =>
                            <Dropdown.Item
                               onClick={() => device.setSelectedType(type)}
                               key={type.id}
                            >
                               {type.name}
                            </Dropdown.Item>
                       )}
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown className="mt-2 mb-2">
                    <Dropdown.Toggle>{device?.selectedBrand?.name || "Choose a brand"}</Dropdown.Toggle>
                   <Dropdown.Menu>
                        {device.brands.map((brand: IBrand) =>
                           <Dropdown.Item
                                onClick={() => device.setSelectedBrand(brand)}
                                key={brand.id}
                            >
                                {brand.name}
                            </Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>
                <Form className="d-flex flex-column">
                 <Form.Control
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                   value={name} 
                   className="ms-1"
                   placeholder='Enter device name...'/>
                 <Form.Control
                   onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPrice(Number(e.target.value))}
                   value={price}
                   type="number" 
                   className="ms-1 mt-1" 
                   placeholder='Enter device price...'/>
                 <Form.Control
                  onChange={selectFile} 
                  type="file" 
                  className="ms-1 mt-1" 
                  placeholder='Device photo'/>
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

