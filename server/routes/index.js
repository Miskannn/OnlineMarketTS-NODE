import {Router} from "express"
import deviceRouter from "../routes/deviceRouter.js"
import brandRouter from "../routes/brandRouter.js"
import typeRouter from "../routes/typeRouter.js"
import userRouter from "../routes/userRouter.js"




const router = new Router();

router.use('/user',userRouter)
router.use('/type', typeRouter)
router.use('/brand', brandRouter)
router.use('/device', deviceRouter)




export default router;