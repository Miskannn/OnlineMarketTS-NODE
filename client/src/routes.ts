import AdminPage from "./pages/AdminPage";
import Authorization from "./pages/Authorization";
import Basket from "./pages/Basket";
import DevicePage from "./pages/DevicePage";
import Shop from "./pages/Shop";
import {AuthorisedPath, UnauthorisedPath} from "./utils/Path";

export const authRoutes = [
 {
     path: AuthorisedPath.ADMIN_ROUTE,
     Component: AdminPage
 },
 {
     path: AuthorisedPath.BASKET_ROUTE,
     Component: Basket
 }
];

export const publicRoutes = [
    {
        path: UnauthorisedPath.SHOP_ROUTE,
        Component: Shop
    },
    {
        path: UnauthorisedPath.DEVICE_ROUTE + '/:id',
        Component: DevicePage
    },
    {
        path: UnauthorisedPath.LOGIN_ROUTE,
        Component: Authorization
    },
    {
        path: UnauthorisedPath.REGISTRATION_ROUTE,
        Component: Authorization
    }
]