import mongoose, { model, Schema } from "mongoose";


const orderItemSchmea = new Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    },
    quntity: {
        type: Number,
        required: true
    }
})

const orderSchema = new Schema({
    orderPrice: {
        type: Number,
        required: true
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    orderItems: {
        type: [orderItemSchmea]
    },
    address: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["PENDING", "CANCELLED", 'DELIVERED'],
        default: "PENDING"
    }
}, { timestamps: true })


export const Order = model('Order', orderSchema)