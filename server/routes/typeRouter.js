import {Router} from "express"
import typeController from "../controllers/typeController.js";
import roleMiddleware from "../middleware/roleMiddleware.js";
const router = new Router();

router.post('/', roleMiddleware('ADMIN'), typeController.create)
router.get('/', typeController.getAll)
router.delete('/', typeController.deleteOne)



export default router;