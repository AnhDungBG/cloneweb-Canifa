import mongoose from "mongoose";

const schemaCategory = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    slug: {
        type: String,
        require: true
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