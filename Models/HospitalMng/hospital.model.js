import mongoose, { model, Schema } from "mongoose";

const hospitalSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    addressLine1: {
        type: String,
        required: true
    },
    addressLine2: {
        type: String,
    },
    city: {
        type: String,
        required: true
    },
    pinCode: {
        type: String,
        required: true
    },
    specialisedIn: [
        {
            type: String
        }
    ]
}, { timestamps: true })


export const Hospital = model("Hospital", hospitalSchema)