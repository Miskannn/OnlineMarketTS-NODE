import { observer } from "mobx-react-lite";
import {Switch,Route,Redirect} from "react-router-dom"
import { authRoutes, publicRoutes } from '../routes'
import { UnauthorisedPath } from "../utils/Path";
import userStore from "../store/userStore";
import "../style/index.scss"


const AppRouter = observer(() => {
    

    return (
        <Switch>
            {userStore.isAuth && authRoutes.map(({path,Component}) =><Route key = {path} component = {Component} path = {path} exact/>)}
            {publicRoutes.map(({path,Component}) =><Route key = {path} component = {Component} path = {path} exact/> )}
            <Redirect to = {UnauthorisedPath.SHOP_ROUTE} />
        </Switch>
    )
})

export default AppRouter
