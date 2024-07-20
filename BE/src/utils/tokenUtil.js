import jwt from 'jsonwebtoken';
import config from '../configs/config.js';

const generateAccessToken = (payload) => {
    return jwt.sign(payload, config.SERECT_KEY, { expiresIn: config.ACCESS_TOKEN_LIFE });
};

const generateRefreshToken = (payload) => {
    return jwt.sign(payload, config.SERECT_KEY, { expiresIn: config.REFRESH_TOKEN_LIFE });
};

const verifyToken = (token, secret) => {


    return jwt.verify(token, secret);

};

export {
    generateAccessToken,
    generateRefreshToken,
    verifyToken
};
