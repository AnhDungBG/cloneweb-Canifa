import mongoose from "mongoose";

const schemaCategory = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    slug: String,
    isHidden: {
        type: Boolean,
        default: false,
    },
    productId: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product"
        }
    ]
})

const Category = mongoose.model("Category", schemaCategory)
export default Category