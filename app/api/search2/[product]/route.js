import Product from "@models/product";
import { connectToDB } from "@utils/database";

export const GET = async (request, {params}) => {
    try {
        await connectToDB()
        const productname = params.product.replace("_"," ");
        const products = await Product.find({
            'pname':{ $regex: new RegExp(productname, 'i') }
        })
        if(!products) return new Response("Product Not Found",{status: 404});
        return new Response(JSON.stringify(products), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch all product", { status: 500 })
    }
}   