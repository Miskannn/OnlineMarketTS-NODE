import {Navbar,Container,Nav,Button} from 'react-bootstrap';
import { NavLink,useHistory } from 'react-router-dom';
import { UnauthorisedPath,AuthorisedPath } from '../utils/Path';
import styles from "../style/NavBar.module.scss"
import userStore from '../store/userStore';
import { observer } from 'mobx-react-lite';
import {useContext} from "react";
import {Context} from "../index"

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const history = useHistory();
    
    const logOut = () => {
      user.setUser({})
      user.setIsAuth(false)
    }

    return (
     <Navbar style = {{maxHeight: 50}} bg="dark" variant="dark">
       <Container>
        <NavLink className = {styles.navLink} to = {UnauthorisedPath.SHOP_ROUTE}>DeviceShop</NavLink>
        {userStore.isAuth
        ?<Nav className="ms-auto">
          <Button onClick={() => history.push(AuthorisedPath.ADMIN_ROUTE)} variant = {'outline-light'}>Аdmin Panel</Button>
          <Button onClick={() => logOut()} variant = {'outline-light'} className = 'ms-3'>Sign Out</Button>
         </Nav>
        :<Nav className="ms-auto">
          <Button onClick={() => history.push(UnauthorisedPath.LOGIN_ROUTE)} variant = {'outline-light'}>Аuthorization</Button>
         </Nav>}
        </Container>
     </Navbar>
    )
})

export default NavBar
