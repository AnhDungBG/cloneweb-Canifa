import Joi from 'joi';

const categoryValidate = Joi.object({
    name: Joi.string().required(),
    slug: Joi.string().required(),
    productId: Joi.array()
});
export default categoryValidate 