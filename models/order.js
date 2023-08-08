import mongoose, { Schema, model, models } from "mongoose";

const OrderSchema = new Schema({
    productid:{
        type:Schema.Types.ObjectId,
        ref: 'Product',
    },
    userid:{
        type:Schema.Types.ObjectId,
        ref: 'User'  
    },
    quantity:Number,
    colour:String,
    size:String,
    status:{
        type:String,
        Enum:['Processing','Out for Delivery','Complete','Refunded','Returned'],
        default:"Processing"
    },
    createdat:{
        type:Date,
        default:Date.now(),
    }
});
const Order = models.Order || model("Order", OrderSchema);

export default Order;