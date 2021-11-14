import {Navbar,Container,Nav,Button} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { UnauthorisedPath } from '../utils/Path';
import styles from "../style/NavBar.module.scss"
import userStore from '../store/userStore';
import { observer } from 'mobx-react-lite';


const NavBar = observer(() => {
    return (
     <Navbar style = {{maxHeight: 50}} bg="dark" variant="dark">
       <Container>
        <NavLink className = {styles.navLink} to = {UnauthorisedPath.SHOP_ROUTE}>DeviceShop</NavLink>
        {userStore.isAuth
        ?<Nav className="ms-auto">
          <Button variant = {'outline-light'}>Аdmin Panel</Button>
          <Button variant = {'outline-light'} className = 'ms-3'>Sign Out</Button>
         </Nav>
        :<Nav className="ms-auto">
          <Button variant = {'outline-light'}>Аuthorization</Button>
         </Nav>}
        </Container>
     </Navbar>
      
    )
})

export default NavBar
