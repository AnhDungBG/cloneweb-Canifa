import mongoose from "mongoose";

const schemaUser = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        requireL: true
    },
    password: {
        type: String,
        require: true
    },
    role: {
        type: String,
        default: "member",
        enum: ["member", "admin"]
    }
})

const User = mongoose.model("User", schemaUser, "users")
export default User