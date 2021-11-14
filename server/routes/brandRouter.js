import {Router} from "express"
import brandController from "../controllers/brandController.js";
import roleMiddleware from "../middleware/roleMiddleware.js";

const router = new Router();

router.post('/',roleMiddleware("ADMIN"),brandController.create)
router.get('/',brandController.getAll)
router.delete('/',roleMiddleware("ADMIN"),brandController.deleteOne)


export default router;