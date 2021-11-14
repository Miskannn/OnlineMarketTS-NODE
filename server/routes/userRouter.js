import {Router} from "express"
import userController from "../controllers/userController.js"
import authorizeMiddleware from "../middleware/authorizeMiddleware.js"

const router = new Router();

router.post('/registration',userController.registration);
router.post('/login',userController.login);
router.get('/auth',authorizeMiddleware,userController.check);



export default router;