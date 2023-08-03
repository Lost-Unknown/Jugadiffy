import mongoose, { Schema, model, models } from "mongoose";

const CartItemSchema = new Schema({
  item: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
  },
  quantity: {
    type: Number,
    default: 1, // You can set the default quantity to 1 or any other value you prefer.
  },
});

const UserSchema = new Schema({
    email: {
      type: String,
      unique: [true, 'Email already exists!'],
      required: [true, 'Email is required!'],
    },
    username: {
      type: String,
      required: [true, 'Username is required!'],
      match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"]
    },
    image: {
      type: String,
    },
    dob:{
      type:Date,
      required:[true,"DOB is required"]
    },
    cart: {
      items:[CartItemSchema] // Use the defined CartItemSchema for the items array.
    }
  });
  const CartSchema = models.CartItemSchema ||model("CartItemSchema",CartItemSchema);  
  const User = models.User || model("User", UserSchema);

export default User;