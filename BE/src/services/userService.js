import { userValidateRegister, userValidateLogin } from "../validators/userValidate.js"
import User from '../models/user.js'
import bcryptjs from 'bcryptjs'
import config from "../configs/config.js";
import { generateAccessToken, generateRefreshToken, verifyToken } from "../utils/tokenUtil.js";

const registerService = async ({ data }) => {
    try {
        // valdate user
        const { error } = userValidateRegister.validate(data)
        if (error) {
            throw new Error(error.details[0].message)
        }
        // check user exist
        const existingUser = await User.findOne({ email: data.email })
        if (existingUser) {
            throw new Error("Email already exist ")
        }
        // hash password
        const hashPassword = bcryptjs.hashSync(data.password, 10)
        //  create user
        const user = await User.create({
            ...data,
            password: hashPassword,
        });
        return user
    } catch (error) {
        throw new Error(error)
    }

}

const loginService = async ({ data }) => {
    // valdate user
    const { error } = userValidateLogin.validate(data)
    if (error) {
        throw new Error(error.details[0].message)
    }
    const user = await User.findOne({ email: data.email });

    if (user) {
        const checkPassword = await bcryptjs.compare(data.password, user.password);
        if (!checkPassword) {
            throw new Error("Email/Password is not correct")
        } else {
            // create access token
            const payload = {
                name: user.name,
                email: user.email,
                role: user.role

            }

            const accessToken = generateAccessToken(payload);
            const refreshToken = generateRefreshToken(payload)
            return {
                accessToken,
                refreshToken,
                data: {
                    name: user.name,
                    email: user.email,
                    role: user.role
                }
            }
        }
    }

}
const refreshToken = (req, res) => {
    try {
        console.log('refreshtoken')
        const refreshToken = req.cookies.refreshToken;
        if (!refreshToken) return res.sendStatus(401)
        const payload = verifyToken(refreshToken, config.SERECT_KEY);
        console.log(payload)
        const { exp, iat, ...restPayload } = payload
        const newAccessToken = generateAccessToken(restPayload)
        console.log(newAccessToken)
        return res.status(200).json({
            accessToken: newAccessToken
        });
    } catch (error) {
        res.sendStatus(403)
    }
}


const updateUser = async (userId, data) => {
    try {
        const { error } = userValidate.validate(data);
        if (error) {
            throw new Error(`Error : ${error.details[0].message}`)
        }
        const userUpdate = await User.findByIdAndUpdate(userId, data);
        if (!userUpdate) {
            throw new Error(`Failed to update user with id ${userId}: ${error.message}`);
        }
        return userUpdate
    } catch (error) {
        throw new Error(error)
    }
}

const deleteUser = async (userId) => {
    try {
        const user = await User.findByIdAndDelete(userId);
        if (!user) {
            throw new Error('User not found');
        }
        return user;
    } catch (error) {
        throw new Error(`Failed to delete user with id ${userId}: ${error.message}`);
    }
}

export { registerService, deleteUser, updateUser, loginService, refreshToken }