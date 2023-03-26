import React from 'react'
import { Container,Col,Image,Row,Button,Card } from 'react-bootstrap'
//import deviceStore from '../store/deviceStore'
import styles from "../style/DevicePage.module.scss"
import bigStar from "../assets/bigStar.png"
import { IDevice } from '../types/deviceTypes'
import { useParams } from 'react-router'
import { fetchOneDevice } from '../http/deviceApi'


const DevicePage = () => {

    const [device,setDevice] = React.useState<IDevice>({info: []});
    const {id} = useParams<any>();

    React.useEffect(() => {
          fetchOneDevice(id).then(data => setDevice(data))
    }, [])
    return (
        <Container className="mt-3">
            <Row>
            <Col xs={4} sm={4} md = {4} lg={4}>
             <Image width={300} height={300} src={'http://localhost:5000/' + device.image}/>
            </Col>
            <Col xs={4} sm={4} md = {4} lg={4}>
             <Row className={styles.row}>
                 <h2>{device.name}</h2>
                 <div className={styles.flexCenter} style={{background: `url(${bigStar}) no-repeat center center`,width: 240,height: 240,backgroundSize: 'cover',fontSize: 64}}>
                     {device.rating}
                 </div>
             </Row>
            </Col>
             <Col xs={4} sm={4} md = {4} lg={4}>
                <Card className={styles.card}>
                  <h3 style={{fontSize:23}}>Starting out: {device.price} grn</h3>
                  <Button variant={'outline-success'}>Add to cart</Button>
                </Card>
             </Col>
            </Row>
            <Row className={styles.row2}>
                <h1>Characteristics</h1>
                {device?.info?.map((info: any, index: number) =>
                    <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                        {info.title}: {info.description}.
                    </Row>
                )}
            </Row>
        </Container>
    )
}

export default DevicePage
