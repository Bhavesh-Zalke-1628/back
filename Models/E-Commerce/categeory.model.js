import mongoose, { model, Schema } from "mongoose";


const categoryScehma = new Schema({
    name: {
        type: String,
        required: true,
    }
}, { timestamps: true })


export const Category = model('Category', categeoryScehma)