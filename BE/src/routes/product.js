import { Router } from "express";
import { createProducts, updateProduct, remove, getAll, getDetail } from "../controllers/products.js";
import { checkAdmin } from "../middleWares/auth.js";

const routerProducts = Router()

routerProducts.get('/', getAll)
routerProducts.get('/:id', getDetail)


routerProducts.use("/", checkAdmin)
routerProducts.post('/', createProducts)
routerProducts.put('/:id', updateProduct)
routerProducts.delete('/:id', remove)

export default routerProducts