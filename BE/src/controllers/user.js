import * as UserSevice from '../services/userService.js'

const register = async (req, res, next) => {
    try {
        const user = await UserSevice.registerService(req.body)
        return res.status(200).json({
            message: "Create user successfully",
            data: user
        })
    } catch (error) {
        next(error)
    }
}
const login = async (req, res, next) => {
    try {
        const loginResult = await UserSevice.loginService(req.body)
        res.cookie('refreshToken', loginResult.refreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7d
        })
        return res.status(200).json({
            accessToken: loginResult.accessToken,
            data: loginResult.data
        })
    } catch (error) {
        next(error)
    }
}

const update = async (req, res, next) => {
    try {
        const user = await UserSevice.updateUser(req.params.id, req.body);
        return res.status(200).json({
            message: "Update user successfully",
            data: user
        })

    } catch (error) {
        next(error)
    }

}
const remove = async (req, res, next) => {
    try {
        await UserSevice.deleteUser(req.params.id);
        return res.status(200).json({
            message: "Delete user successfully",
        })

    } catch (error) {
        next(error)
    }
}
const getAccount = (req, res, next) => {
    try {
        return res.status(200).json(res.user)
    } catch (error) {
        next(error)
    }
}
export { register, login, remove, update, getAccount }

