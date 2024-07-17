import Category from '../models/category.js'
import categoryValidate from "../validators/categoryValidate.js";
const createCategory = async (categoryData) => {
    const { error } = categoryValidate.validate(categoryData)
    if (error) {
        throw new Error(error.details[0].message)
    }
    return await Category.create(categoryData);

}
const getCategorys = async () => {
    try {
        return await Category.find();

    } catch (error) {
        throw error
    }
}
const getCategory = async (categoryId) => {
    try {
        return await Category.findById(categoryId)

    } catch (error) {
        throw error
    }
}

const updateCategory = async (categoryId, data) => {
    try {
        const { error } = categoryValidate.validate(data);
        if (error) {
            throw new Error(error.detailsơ0[0].message)
        }
        const category = await Category.findByIdAndUpdate(categoryId, data, { new: true })
        if (!category) {
            throw new Error("Category not found")
        }
        return category
    } catch (error) {
        throw error
    }
}
const deleteCategory = async (categoryId) => {
    try {
        const category = await Category.findByIdAndDelete(categoryId);
        if (!category) {
            throw new Error("Cant delete product")
        }
        return true
    } catch (error) {
        throw error
    }
}

export { createCategory, deleteCategory, updateCategory, getCategory, getCategorys }