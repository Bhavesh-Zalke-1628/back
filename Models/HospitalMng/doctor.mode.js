import mongoose, { model, Schema } from "mongoose";

// const hospitalHour assignment  

const doctorSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    salary: {
        type: String,
        required: true
    },
    qulification: {
        type: String,
        required: true
    },
    exprienceInYears: {
        type: Number,
        default: 0
    },
    worksInHospitals: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Hospital"
        }
    ]
}, { timestamps: true })


export const Doctor = model("Doctor", doctorSchema)