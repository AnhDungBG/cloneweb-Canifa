import { Router } from "express";
import routerProducts from "./product.js";
import routerCategories from "./category.js";
import routerUser from "./user.js";
const router = Router();

router.use('/product', routerProducts)
router.use('/category', routerCategories)
router.use('/user', routerUser)

export default router