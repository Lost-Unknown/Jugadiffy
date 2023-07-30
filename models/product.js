import { Schema, model, models } from 'mongoose';

const ProductSchema = new Schema({
  name: {
    type: String,
    required : [true,"Name is required"]
  },
  price: {
    type: Float,
    required: [true, 'Price is required.'],
  },
  desc:{
    type: String,
    required: [true,"Desc is required."]
  }
});

const Product = models.Product || model('Product', ProductSchema);

export default Product;