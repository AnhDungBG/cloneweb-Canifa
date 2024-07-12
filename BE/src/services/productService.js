import productValidate from "../validators/productValidate.js";
import Product from '../models/product.js'
const createProduct = async (productData) => {
    const { error } = productValidate.validate(productData)
    if (error) {
        throw new Error(error.details[0].message)
    }
    return await Product.create(productData);
}
const getProducts = async () => {
    try {
        const products = await Product.find();
        return products
    } catch (error) {
        throw error
    }
}
const getProduct = async (productId) => {
    try {
        const product = await Product.findById(productId)
        return product;
    } catch (error) {
        throw error
    }
}

const updateProduct = (productId, data) => {
    try {
        const { error } = productValidate.validate(data);
        if (error) {
            throw new Error(error)
        }
        const product = Product.findByIdAndUpdate(productId, data, { new: true })
        if (!product) {
            throw new Error("Product not found")
        }
        return product
    } catch (error) {
        throw error
    }
}
const deleteProduct = async (productId) => {
    try {
        const product = Product.findByIdAndDelete(productId);
        if (!product) {
            throw new Error("Cant delete product")
        }
        return true
    } catch (error) {
        throw error
    }
}

export { createProduct, deleteProduct, updateProduct, getProduct, getProducts }