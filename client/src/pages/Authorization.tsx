import { Container,Form,Card} from 'react-bootstrap';
import styles from "../style/Authorization.module.scss";
import { NavLink,useLocation } from 'react-router-dom';
import { UnauthorisedPath } from '../utils/Path';
import { observer } from 'mobx-react-lite';

const Authorization = observer(() => {

    //const onClick = (e: any, func: Function): void => {
    //     e.preventDefault();
    //     func();
    //}
    const location = useLocation();
    const isLogin = location.pathname === UnauthorisedPath.LOGIN_ROUTE;
    
    return (
        <Container style={{height: window.innerHeight - 54}} className = {styles.container}>
            <Card style={{width: 600}} className = 'p-5'>
                <h2 style={{marginRight: 'auto'}}>{isLogin?'Authorization':'Registration'}</h2>
                 <Form className='d-flex flex-column'>
                 <Form.Control style={{marginTop: 6}} placeholder = 'Your email...'/>
                 <Form.Control style={{marginTop: 6}} placeholder = 'Your password...'/>
                 {isLogin
                   ?<div className={styles.row}>
                    <div>If you dont have account <NavLink className={styles.navlink} to={UnauthorisedPath.REGISTRATION_ROUTE}>Register</NavLink></div>
                    <button>Sign in</button>
                    </div>
                  : <div className={styles.row}>
                    <div>Have an account? <NavLink className={styles.navlink} to={UnauthorisedPath.LOGIN_ROUTE}>Sign in</NavLink></div>
                    <button>{isLogin?'Sign in':'Registration'}</button>
                    </div>
                }
              </Form>
            </Card>
        </Container>
    )
})

export default Authorization
