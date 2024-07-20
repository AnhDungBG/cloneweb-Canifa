import jwt from 'jsonwebtoken';
import config from '../configs/config.js';

const generateAccessToken = (payload) => {
    return jwt.sign(payload, config.SERECT_KEY, { expiresIn: config.ACCESS_TOKEN_LIFE });
};

const generateRefreshToken = (payload) => {
    return jwt.sign(payload, config.SERECT_KEY, { expiresIn: config.REFRESH_TOKEN_LIFE });
};

const verifyToken = (token, secret) => {

    try {
        // Xác thực và giải mã token
        return jwt.verify(token, secret);
    } catch (error) {
        // Xử lý lỗi nếu token không hợp lệ hoặc hết hạn
        console.error("Token không hợp lệ hoặc hết hạn:", error);
        throw new Error('Token không hợp lệ hoặc hết hạn');
    }
};

export {
    generateAccessToken,
    generateRefreshToken,
    verifyToken
};
