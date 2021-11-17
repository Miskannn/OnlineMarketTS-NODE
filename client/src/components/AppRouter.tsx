import { observer } from "mobx-react-lite";
import {Switch,Route,Redirect} from "react-router-dom"
import { authRoutes, publicRoutes } from '../routes'
import { UnauthorisedPath } from "../utils/Path";
import "../style/index.scss"
import { useContext } from "react";
import { Context } from "../index";


const AppRouter = observer(() => {
    const {user} = useContext(Context)

    return (
        <Switch>
            {user.isAuth && authRoutes.map(({path,Component}) =><Route key = {path} component = {Component} path = {path} exact/>)}
            {publicRoutes.map(({path,Component}) =><Route key = {path} component = {Component} path = {path} exact/> )}
            <Redirect to = {UnauthorisedPath.SHOP_ROUTE} />
        </Switch>
    )
})

export default AppRouter
