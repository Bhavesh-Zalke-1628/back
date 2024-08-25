import mongoose, { model, Schema } from "mongoose";


const userSchema = new Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: [true, 'password is required']
    }
}, {
    timestamps: true
})



const User = model('User', userSchema)

export default User;