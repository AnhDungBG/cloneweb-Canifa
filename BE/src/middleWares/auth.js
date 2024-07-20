import config from '../configs/config.js';
import { verifyToken } from '../utils/tokenUtil.js';
const auth = (req, res, next) => {
    const noTokenRequired = ["", "user/register", 'user/login', 'user/logout', 'user/refresh-token']
    if (noTokenRequired.find(item => '/api/' + item === req.originalUrl)) {
        next()
    } else {
        if (req?.headers?.authorization?.split(' ')[1]) {
            const token = req?.headers?.authorization?.split(' ')[1];
            if (token) {
                try {
                    const decode = verifyToken(token, config.SERECT_KEY);
                    // console.log(decode)
                    req.user = {
                        name: decode.name,
                        email: decode.email,
                        role: decode.role
                    }
                    console.log(req.user)
                    next()
                } catch (error) {
                    return res.status(401).json({
                        message: "Error token"
                    })
                }
            }

        } else {
            return res.status(401).json({
                message: "Not token"
            })
        }
    }
}
const checkAdmin = (req, res, next) => {
    try {
        if (req?.user.role !== "admin") {
            return res.status(401).json({
                message: "Unthorized"
            })
        }
        next()
    } catch (error) {
        return res.status(500).json({
            message: error
        })

    }
}
export { auth, checkAdmin }