import React from 'react'
import { Container,Col,Image,Row,Button,Card } from 'react-bootstrap'
//import deviceStore from '../store/deviceStore'
import styles from "../style/DevicePage.module.scss"
import bigStar from "../assets/bigStar.png"
import { IDevice } from '../types/deviceTypes'

interface DevicePageProps{
    device: IDevice;
}


const DevicePage:React.FC<DevicePageProps> = ({device}) => {
    const devices =  {id: 3,name: 'Xiaomi',price: 25000,image: 'https://www.purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png',rating: 5}
    const description = [
        {id: 1,title: 'RAM',description: '8 gb'},
        {id: 2,title: 'Camera',description: '128 mp'},
        {id: 3,title: 'Processor',description: 'core i13'},
        {id: 4,title: 'Number of cores',description: '228'},
        {id: 5,title: 'Battery',description: '4442 mAh'}
    ]
    return (
        <Container className="mt-3">
            <Row>
            <Col xs={4} sm={4} md = {4} lg={4}>
             <Image width={300} height={300} src={devices.image}/>
            </Col>
            <Col xs={4} sm={4} md = {4} lg={4}>
             <Row className={styles.row}>
                 <h2>{devices.name}</h2>
                 <div className={styles.flexCenter} style={{background: `url(${bigStar}) no-repeat center center`,width: 240,height: 240,backgroundSize: 'cover',fontSize: 64}}>
                     {devices.rating}
                 </div>
             </Row>
            </Col>
             <Col xs={4} sm={4} md = {4} lg={4}>
                <Card className={styles.card}>
                  <h3 style={{fontSize:23}}>Starting out: {devices.price} grn</h3>
                  <Button variant={'outline-success'}>Add to cart</Button>
                </Card>
             </Col>
            </Row>
            <Row className={styles.row2}>
                <h1>Characteristics</h1>
                {description.map((info, index) =>
                    <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                        {info.title}: {info.description}.
                    </Row>
                )}
            </Row>
        </Container>
    )
}

export default DevicePage
