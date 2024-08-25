import mongoose, { model, Schema } from "mongoose";


const subTodoSchema = new Schema({
    content: {
        type: String,
        required: true,
    },
    complete: {
        type: Boolean,
        default: false
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, { timestamps: true })


export const SubTodo = model('SubTodo', subTodoSchema)