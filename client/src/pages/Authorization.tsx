import { Container,Form,Card} from 'react-bootstrap';
import styles from "../style/Authorization.module.scss";
import { NavLink,useLocation } from 'react-router-dom';
import { UnauthorisedPath } from '../utils/Path';
import { observer } from 'mobx-react-lite';
import { login, registration } from '../http/userApi';
import {useState} from "react"
import userStore from "../store/userStore"
import { useHistory } from 'react-router';

const Authorization = observer(() => {

    const user = userStore.user
    const location = useLocation();
    const history = useHistory();
    const isLogin = location.pathname === UnauthorisedPath.LOGIN_ROUTE;
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');


    const signIn = async(e: any) => {
      try {
        e.preventDefault();
       let data;
       if (isLogin){
         data = await login(email,password);
       } else {
         data = await registration(email,password);
       }
         userStore.setUser(user);
         userStore.setIsAuth(true);
         history.push(UnauthorisedPath.SHOP_ROUTE)
      } catch (e: any) {
        alert(e.response.data.message)
      }
    }

    return (
        <Container style={{height: window.innerHeight - 54}} className = {styles.container}>
            <Card style={{width: 600}} className = 'p-5'>
                <h2 style={{marginRight: 'auto'}}>{isLogin?'Authorization':'Registration'}</h2>
                 <Form className='d-flex flex-column'>
                 <Form.Control onChange={e => setEmail(e.target.value)} value={email} style={{marginTop: 6}} placeholder = 'Your email...'/>
                 <Form.Control type="password" onChange={e => setPassword(e.target.value)} value={password} style={{marginTop: 6}} placeholder = 'Your password...'/>
                 {isLogin
                   ?<div className={styles.row}>
                    <div>If you dont have account <NavLink className={styles.navlink} to={UnauthorisedPath.REGISTRATION_ROUTE}>Register</NavLink></div>
                    <button>Sign in</button>
                    </div>
                  : <div className={styles.row}>
                    <div>Have an account? <NavLink className={styles.navlink} to={UnauthorisedPath.LOGIN_ROUTE}>Sign in</NavLink></div>
                    <button onClick={(e: any) => signIn(e)}>{isLogin?'Sign in':'Registration'}</button>
                    </div>
                }
              </Form>
            </Card>
        </Container>
    )
})

export default Authorization
