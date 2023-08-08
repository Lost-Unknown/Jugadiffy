import User from "@models/user";
import { connectToDB } from "@utils/database"; export const PUT = async (request, { params }) => {
    try {
      await connectToDB();

      const currentUser = await User.findOne({ 'cart._id': params.id });
  
      if (!currentUser) {
        return new Response("Cart item not found", { status: 404 });
      }
  
      // Find the cart item with the given item ID
      const cartItem = currentUser.cart.find((item) =>
        item._id.toString() === params.id
      );
  
      if (!cartItem) {
        return new Response("Cart item not found", { status: 404 });
      }
  
      if (params.action === "increase") {
        cartItem.quantity += 1;
      } else if (params.action === "decrease") {
        if (cartItem.quantity > 1) {
          cartItem.quantity -= 1;
        }
      }
  
      await currentUser.save();
  
      return new Response("Cart item updated successfully", { status: 200 });
    } catch (error) {
      return new Response("Failed to update cart item", { status: 500 });
    }
  };