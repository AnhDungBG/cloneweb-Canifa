import * as categoryService from '../services/categoryService.js';

const createCategory = async (req, res) => {
    try {

        const category = await categoryService.createCategory(req.body);
        if (!category) {
            return res.status(404).json({
                message: "Don't create category"
            })
        }
        return res.status(200).json({
            message: "Create category successfully",
            data: category
        })
    } catch (error) {
        return res.status(500).json({
            message: error
        })
    }
}

const getAll = async (req, res) => {
    const categories = await categoryService.getCategorys()
    if (!categories) {
        return res.status(400).json({
            message: "Can't get categories"
        })
    }
    return res.status(200).json({
        message: "Get categories successfully",
        data: categories
    })
}
const getDetail = async (req, res) => {
    const category = await categoryService.getCategory(req.params.id)
    if (!category) {
        return res.status(400).json({
            message: "Can't not found category"
        })
    }
    return res.status(200).json({
        message: "get  category successfully",
        data: category
    })
}
const remove = async (req, res) => {
    const category = await categoryService.deleteCategory(req.params.id)
    if (!category) {
        return res.status(400).json({
            message: "Can't delete category"
        })
    }
    return res.status(200).json({
        message: "delete successfully"
    })
}

const updateCategory = async (req, res) => {

    const categoryUpdate = await categoryService.updateCategory(req.params.id, req.body)
    if (!categoryUpdate) {
        return res.status(400).json({
            message: "cant update category"
        })
    }
    return res.status(200).json({
        message: "update successful",
        data: categoryUpdate
    })

}


export { createCategory, getAll, getDetail, remove, updateCategory };
