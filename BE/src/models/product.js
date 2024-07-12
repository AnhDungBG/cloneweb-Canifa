import mongoose from "mongoose";
const schemaProduct = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category"
    }
})

const Product = mongoose.model("Product", schemaProduct)
export default Product