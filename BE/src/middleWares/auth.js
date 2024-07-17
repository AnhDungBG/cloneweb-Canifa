import jwt from 'jsonwebtoken';
import config from '../configs/config.js';
const auth = (req, res, next) => {
    const noTokenRequired = ["", "user/register", 'user/login']
    if (noTokenRequired.find(item => '/api/' + item === req.originalUrl)) {
        next()

    } else {
        if (req?.headers?.authorization?.split(' ')[1]) {
            const token = req?.headers?.authorization?.split(' ')[1];
            try {
                const { payload } = jwt.verify(token, config.SERECT_KEY)
                res.user = {
                    name: payload.name,
                    email: payload.email,
                    role: payload.role
                }
                next()
            } catch (error) {
                return res.status(401).json({
                    message: "Error token"
                })
            }
        } else {
            return res.status(401).json({
                message: "Not token"
            })
        }
    }


}

export default auth