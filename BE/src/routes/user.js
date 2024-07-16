import { Router } from "express";
import { register, login, remove, update, getAccount } from "../controllers/user.js";

const routerUser = Router()

routerUser.post('/register', register)
routerUser.post('/login', login)
routerUser.put('/:id', update)
routerUser.delete('/:id', remove)
routerUser.get('/:id', getAccount)


export default routerUser