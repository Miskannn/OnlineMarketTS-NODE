import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import NavBar from './components/Navbar';
import './style/index.scss';
import {observer} from "mobx-react-lite"
import userStore from "./store/userStore"
import {check} from "./http/userApi"
import { Spinner } from 'react-bootstrap';

const App = observer(() => {
  const user = userStore.user;
  const [loading,setLoading] = React.useState(true);

  React.useEffect(() => {
    check().then(data => {
        user.setUser(true)
        user.setIsAuth(true)
    }).finally(() => setLoading(false))
  })

if (loading) {
    return <Spinner animation={"grow"}/>
}

  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  )
})

export default App
