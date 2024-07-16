import Joi from "joi";
const userValidateRegister = Joi.object({
    name: Joi.string().min(6).required(),
    email: Joi.string().email().required(),
    password: Joi.alternatives().try(
        Joi.string().min(6).required(),
        Joi.number().required()
    )
})
const userValidateLogin = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.alternatives().try(
        Joi.string().min(6).required(),
        Joi.number().required()
    )
})

export { userValidateRegister, userValidateLogin }