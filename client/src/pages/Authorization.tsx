import { Container,Form,Card,Row,Button} from 'react-bootstrap';
import { NavLink,useLocation } from 'react-router-dom';
import { UnauthorisedPath } from '../utils/Path';
import { observer } from 'mobx-react-lite';
import { login, registration } from '../http/userApi';
import {useState} from "react";
import { useHistory } from 'react-router';
import { useContext } from 'react';
import {Context} from "../index"

const Authorization = observer(() => {
    const {user} = useContext(Context);
    const location = useLocation();
    const history = useHistory();
    const isLogin = location.pathname === UnauthorisedPath.LOGIN_ROUTE;
    const [email, setEmail] = useState<any>('');
    const [password, setPassword] = useState<any>('');

    const click = async() => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password);
            } else {
                data = await registration(email, password);
            }
            user.setUser(user)
            user.setIsAuth(true)
            history.push(UnauthorisedPath.SHOP_ROUTE)
        } catch (e: any) {
            alert(e?.response?.data?.message)
        }

    }

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">{isLogin ? 'Авторизация' : "Регистрация"}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите ваш email..."
                        value={email}
                        onChange={e => setEmail(e?.target?.value)}
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите ваш пароль..."
                        value={password}
                        onChange={e => setPassword(e?.target?.value)}
                        type="password"
                    />
                    <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                        {isLogin ?
                            <div>
                               Not have account? <NavLink to={UnauthorisedPath.REGISTRATION_ROUTE}>Register!</NavLink>
                            </div>
                            :
                            <div>
                               Do you have an account? <NavLink to={UnauthorisedPath.LOGIN_ROUTE}>Sign In!</NavLink>
                            </div>
                        }
                        <Button
                            variant={"outline-success"}
                            onClick={click}
                        >
                            {isLogin ? 'Sign In' : 'Registration'}
                        </Button>
                    </Row>

                </Form>
            </Card>
        </Container>
    );
});

export default Authorization;