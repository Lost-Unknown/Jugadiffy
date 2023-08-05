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
  price2: {
    type: Number,
    required: [true, 'Price is required.'],
  },
  desc:{
    type: String,
    required: [true,"Desc is required."]
  },
  image:[String],
  colour:[String],
  size:[String],
  category:[String]
});

const Product = models.Product || model('Product', ProductSchema);
export default Product;