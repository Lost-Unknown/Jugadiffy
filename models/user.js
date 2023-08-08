import mongoose, { Schema, model, models } from "mongoose";
import Order from "./order";
const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, "Email already exists!"],
    required: [true, "Email is required!"],
  },
  username: {
    type: String,
    required: [true, "Username is required!"],
  },
  image: {
    type: String,
    default: "/assets/images/profile.svg",
  },
  password:{
    type:String,
    require:[true,"Password is required"]
  },
  dob: {
    type: Date,
    required: [true, "DOB is required"],
  },
  mobile: {
    type: Number,
  },
  address: {
    street: {
      type:String,
      required:[true,"address is required"]
    },
    city:  {
      type:String,
      required:[true,"address is required"]
    },
    state:  {
      type:String,
      required:[true,"address is required"]
    },
    pincode:  {
      type:Number,
      required:[true,"address is required"]
    },
  },
  cart: [
    {
      Productid: {
        type: Schema.Types.ObjectId,
        ref: "Product",
      },
      quantity: {
        type: Number,
        default: 1,
      },
      colour: String,
      size: String,
    },
  ],
  orders: [
    {
      order: {
        type: Schema.Types.ObjectId,
        ref: "Order", // This should be a string with the name of the model
      },
    },
  ],
});
const User = models.User || model("User", UserSchema);

export default User;
