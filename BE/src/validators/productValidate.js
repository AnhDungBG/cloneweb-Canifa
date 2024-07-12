import Joi from 'joi';

const productValidate = Joi.object({
    name: Joi.string().min(6).required(),
    price: Joi.number().required(),
    categoryId: Joi.string()
})

export default productValidate 