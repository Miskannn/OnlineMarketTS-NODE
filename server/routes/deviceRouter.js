import {Router} from "express"
import deviceController from "../controllers/deviceController.js";
import roleMiddleware from "../middleware/roleMiddleware.js";

const router = new Router();

router.post('/',roleMiddleware("ADMIN"),deviceController.create)
router.get('/',deviceController.getAll)
router.get('/:id',deviceController.getOne)
router.delete('/',roleMiddleware("ADMIN"),deviceController.deleteOne)

export default router;