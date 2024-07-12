import Category from "../models/category.js"
import * as productService from '../services/productService.js'
const getAll = async (req, res) => {
    const products = await productService.getProducts();
    if (!products) {
        return res.status(400).json({
            message: "Can't get products"
        })
    }
    return res.status(200).json({
        message: "Get products successfully",
        data: products
    })
}
const getDetail = async (req, res) => {
    const product = await productService.getProduct(req.params.id)
    if (!product) {
        return res.status(400).json({
            message: "Can't not found product"
        })
    }
    console.log(product);
    return res.status(200).json({
        message: "get  product successfully",
        data: product
    })
}

const createProducts = async (req, res) => {
    try {
        const product = await productService.createProduct(req.body)
        if (!product) {
            return res.status(404).json({
                message: "Don't create products"
            })
        }
        const updateCategory = await Category.findByIdAndUpdate(product.categoryId, {
            $addToSet: {
                productId: product._id
            }
        })
        if (!updateCategory) {
            return res.status(404).json({
                message: "Choose a category"
            })
        }
        return res.status(200).json({
            message: "Create product successfully",
            data: product
        })

    } catch (error) {
        return res.status(500).json({
            message: "An error occurred while creating the product"
        });
    }
}
const remove = async (req, res) => {
    try {
        const product = await productService.deleteProduct(req.params.id)
        if (!product) {
            return res.status(400).json({
                message: "Can't delete product"
            })
        }
        return res.status(200).json({
            message: "delete successfully"
        })
    } catch (error) {
        return res.status(500).json({
            message: error
        })
    }
}

const updateProduct = async (req, res) => {
    try {

        const productUpdate = await productService.updateProduct(req.params.id, req.body)
        if (!productUpdate) {
            return res.status(400).json({
                message: "cant update product"
            })
        }
        return res.status(200).json({
            message: "update successful",
            data: productUpdate
        })
    } catch (error) {
        throw error
    }

}


export { createProducts, getAll, getDetail, remove, updateProduct }
