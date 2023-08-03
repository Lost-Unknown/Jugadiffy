import Product from "@models/product";
import { connectToDB } from "@utils/database";

export const GET = async (request, {params}) => {
    try {
        await connectToDB()

        const product = await Product.findById(params.id)
        if(!product) return new Response("Product Not Found",{status: 404});

        return new Response(JSON.stringify(product), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch all product", { status: 500 })
    }
}   

export const PATCH = async (request, {params}) =>{
    const {product} = await request.json();
    try{
        await connectToDB();

        const existingProduct = await Product.findById(params.id);
        if(!product) return new Response("Product Not Found",{status: 404});

        existingProduct.pname = pname;
        existingProduct.price = price;
        existingProduct.desc = desc;
        existingProduct.image = image;

        await existingProduct.save();
        return new Response(JSON.stringify(existingProduct), { status: 200 })
    } catch (error) {
        return new Response("Failed to edit the products", { status: 500 })
    }
}

export const DELETE = async (request, {params}) => {
      try{
        await connectToDB();

        await Product.findByIdAndRemove(params.id);

      return new Response("Product Deleted Successfully.", { status: 200 })
    } catch (error) {
        return new Response("Failed to delete the product.", { status: 500 })
    }
}