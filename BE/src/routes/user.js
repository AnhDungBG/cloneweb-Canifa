import { Router } from "express";
import { register, login, remove, update, getAccount } from "../controllers/user.js";
import { refreshToken } from "../services/userService.js";

const routerUser = Router()

routerUser.post('/register', register)
routerUser.post('/login', login)
routerUser.get('/refresh-token', refreshToken)
routerUser.put('/:id', update)
routerUser.delete('/:id', remove)
routerUser.get('/get-account', getAccount)


export default routerUser