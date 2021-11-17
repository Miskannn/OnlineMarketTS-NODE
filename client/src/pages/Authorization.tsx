import { Container,Form,Card} from 'react-bootstrap';
import styles from "../style/Authorization.module.scss";
import { NavLink,useLocation } from 'react-router-dom';
import { UnauthorisedPath } from '../utils/Path';
import { observer } from 'mobx-react-lite';
import { login, registration } from '../http/userApi';
import {useState} from "react";
import { useHistory } from 'react-router';
import { useContext } from 'react';
import {Context} from "../index"

const Authorization = observer(() => {
    //states
    const {user} = useContext(Context);
    const location = useLocation();
    const history = useHistory();
    const isLogin = location.pathname === UnauthorisedPath.LOGIN_ROUTE;
    const [email,setEmail] = useState<string | undefined>('');
    const [password,setPassword] = useState<string | undefined>('');


    const click = async () => {
      try {
           
          user.setIsAuth(true)
          history.push(UnauthorisedPath.SHOP_ROUTE)
      } catch (e: any) {
          console.log(e)
      }

  }

    return (
        <Container style={{height: window.innerHeight - 54}} className = {styles.container}>
            <Card style={{width: 600}} className = 'p-5'>
                <h2 style={{marginRight: 'auto'}}>{isLogin?'Authorization':'Registration'}</h2>
                 <Form className='d-flex flex-column'>
                 <Form.Control onChange={e => setEmail(e?.target?.value)} value={email} style={{marginTop: 6}} placeholder = 'Your email...'/>
                 <Form.Control type="password" onChange={e => setPassword(e?.target?.value)} value={password} style={{marginTop: 6}} placeholder = 'Your password...'/>
                 <div className="d-flex justify-content-between mt-3 pl-3 pr-3">
                        {isLogin ?
                            <div>
                                Dont have account? <NavLink className={styles.navlink} to={UnauthorisedPath.REGISTRATION_ROUTE}>Register!</NavLink>
                            </div>
                            :
                            <div>
                                Have an account? <NavLink className={styles.navlink} to={UnauthorisedPath.LOGIN_ROUTE}>Sign In!</NavLink>
                            </div>
                        }
                      <button
                            className={styles.button}
                            onClick={click}
                        >
                            {isLogin ? 'Войти' : 'Регистрация'}
                      </button>
                </div>
              </Form>
            </Card>
        </Container>
    )
})

export default Authorization
