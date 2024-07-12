import { Router } from "express";
import { createProducts, updateProduct, remove, getAll, getDetail } from "../controllers/products.js";

const routerProducts = Router()

routerProducts.post('/', createProducts)
routerProducts.get('/', getAll)
routerProducts.get('/:id', getDetail)
routerProducts.put('/:id', updateProduct)
routerProducts.delete('/:id', remove)

export default routerProducts