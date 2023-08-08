
import User from "@models/user";
import { connectToDB } from "@utils/database";
export const GET = async (request,{params}) => {
  try {
    await connectToDB();

    const currentUser = await User.findById(params.id).populate("cart.Productid");

    if (!currentUser) {
      return new Response("User not found", { status: 404 });
    }
    return new Response(JSON.stringify(currentUser), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch cart items", { status: 500 });
  }
};

export const POST = async (request) => {
    try {
      await connectToDB();
      const { id,productid, color, size } = await request.json();
      
      const currentUser = await User.findById(id);
      if (!currentUser) {
        return new Response("User Not found");
      }
      // Add the new cart item to the user's cart
      const existingCartItem = currentUser.cart.find(
        (item) =>
          item.Productid === productid &&
          item.colour === color &&
          item.size === size
      );
  
      if (existingCartItem) {
        // If the product already exists, increase the quantity by 1
        existingCartItem.quantity += 1;
      } else {
      currentUser.cart.push({
        Productid: productid,
        colour: color,
        size:size,
      });
    }
      await currentUser.save();
  
      return new Response("Item added to the cart successfully", { status: 200 });
    } catch (error) {
      return new Response("Failed to add item to the cart"+error, { status: 500 });
    }
  };
  
  export const DELETE = async (request, { params }) => {
    try {
      await connectToDB();
      const currentUser = await User.findOne({'cart._id':params.id});
  
      if (!currentUser) {
        return new Response("Cart item not found", { status: 404 });
      }
      
      // Use a function to compare ObjectIds
      currentUser.cart = currentUser.cart.filter((item) => !item._id.equals(params.id));
      await currentUser.save();
      return new Response("Item removed from the cart successfully", { status: 200 });
    } catch (error) {
      return new Response("Failed to remove item from the cart", { status: 500 });
    }
  };

 