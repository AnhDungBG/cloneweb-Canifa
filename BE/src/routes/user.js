import { Router } from "express";
import { register, login, remove, update, getAccount, logout } from "../controllers/user.js";
import { refreshToken } from "../services/userService.js";
import { auth } from "../middleWares/auth.js";

const routerUser = Router()

routerUser.post('/register', register)
routerUser.post('/login', login)
routerUser.get('/logout', logout)
routerUser.get('/refresh-token', refreshToken)
routerUser.put('/:id', update)
routerUser.delete('/:id', remove)
routerUser.get('/get-account', getAccount)


export default routerUser