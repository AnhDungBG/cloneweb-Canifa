import { Router } from "express";
import { createCategory, updateCategory, remove, getAll, getDetail } from "../controllers/category.js";

const routerCategories = Router();

routerCategories.get('/', getAll)
routerCategories.get('/:id', getDetail)
routerCategories.post('/', createCategory)
routerCategories.put('/:id', updateCategory)
routerCategories.delete('/:id', remove)

export default routerCategories
