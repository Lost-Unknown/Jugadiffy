import Product from "@models/product";
import { connectToDB } from "@utils/database";

export const POST = async (request) => {
    const { pname, price, desc,image} = await request.json();
    try {
        await connectToDB();
        const newProduct = new Product({pname, price, desc,image });
        await newProduct.save();
        return new Response(JSON.stringify(newProduct), { status: 201 })
    } catch (error) {
        return new Response("Failed to create a new product", { status: 500 });
    }
}