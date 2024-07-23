import mongoose from "mongoose";
const schemaProduct = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    description: {
        type: String,
        require: true,
    },

    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
    }
})

const Product = mongoose.model("Product", schemaProduct)
export default Product