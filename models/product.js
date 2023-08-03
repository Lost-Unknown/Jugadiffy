import { Schema, model, models } from 'mongoose';


const ProductSchema = new Schema({
  pname: {
    type: String,
    required : [true,"Name is required"]
  },
  price: {
    type: Number,
    required: [true, 'Price is required.'],
  },
  desc:{
    type: String,
    required: [true,"Desc is required."]
  },
  image:[String]
});

const Product = models.Product || model('Product', ProductSchema);
export default Product;