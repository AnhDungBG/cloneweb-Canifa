import { Router } from "express";
import routerProducts from "./product.js";
import routerCategories from "./category.js";

const router = Router();

router.use('/product', routerProducts)
router.use('/category', routerCategories)

export default router