
import ChipList from "./ColourList";
import { useSession, getProviders } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ProductImage from "./ProductImage";


const ProductPage = ({ post, setPost }) => {
  const { data: session } = useSession();

  const router = useRouter();
  const [selectedColour, setSelectedColour] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [Added,setAdded] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const handleColorClick = (color) => {
    setSelectedColour(color);
  };

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const isAddToCartDisabled = !(selectedColour && selectedSize);

  const handleAddToCart = async () => {
    try {
      if (!isAddToCartDisabled && session?.user) {
        setSubmitting(true);
        // Make the API post call to save the selected color and size to the database
        const response = await fetch(`/api/cart/${session?.user.id}`, {
          method: "POST",
          body: JSON.stringify({
            id: session?.user.id ,
            productid: post.id, 
            color: selectedColour,
            size: selectedSize,
          }),
        });
        if (response.ok) {
          setAdded(true)
          // You can show a success message or update the UI accordingly
          console.log("Cart item added to the database");
        } else {
          // Handle error response from the server
          console.error("Failed to add cart item to the database");
        }

        setSubmitting(false);
      } else {
        // Redirect to the sign-in page if the user is not authenticated
        router.push("/Signin");
      }
    } catch (error) {
      console.error("An error occurred while adding cart item:", error);
      setSubmitting(false);
    }
  };
  return (
    <section className="w-full">
      <div className="flex w-full md:flex-row flex-col p-1 bg-white rounded-xl">
        <div className=" md:w-3/5 w-full flex flex-center">
        <ProductImage data={post.image} />
        </div>
        <div className=" md:w-2/5 w-full flex flex-col gap-1 md:p-16 p-4">
          <h2 className=" text-zinc-800 text-5xl font-semibold font-sans">
            {post.pname}
          </h2>
          <div className="flex py-0.5 gap-2 items-end">
            <p className="text-black font-semibold text-xl">₹{post.price}</p>
            <p className="text-zinc-500 text-lg line-through">₹{post.price2}</p>
            <p className="text-green-500 text-xl font-semibold">
              {(post.price2 / post.price) * 100 - 100}% Off
            </p>
          </div>
          <hr className="mt-4 mb-8 border-zinc-600" />

          <form
            className="flex flex-col gap-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <h3 className="text-zinc-800 font-sans text-2xl font-semibold">
              COLOR
            </h3>
            <ChipList
              data={post.colour}
              valparam={selectedColour}
              onChipClick={handleColorClick}
            />
            <h3 className="text-zinc-800 font-sans text-2xl font-semibold">
              SIZE
            </h3>
            <ChipList
              data={post.size}
              valparam={selectedSize}
              onChipClick={handleSizeClick}
            />

            <button
              className={`w-full rounded-full pt-4 pb-4 text-white ${
                isAddToCartDisabled
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-blue-600"
              }`}
              disabled={isAddToCartDisabled || submitting}
              onClick={handleAddToCart}
            >
              {Added ?("Added to Cart") : (submitting ? "Adding to Cart..." : "Add To Cart")}
            </button>
            <button
              className={`w-full rounded-full pt-4 pb-4 text-white ${
                isAddToCartDisabled
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-blue-600"
              }`}
              disabled={isAddToCartDisabled || submitting}
              onClick={()=>window.open(`https://wa.me/918860510084?text=Hello%20Jugaadify%20${'I would like to place an order for the'}%20${post.pname}%20${'of colour'}%20${selectedColour}%20${'and size'}%20${selectedSize}`)}
            >
              {Added ?("Order Placed") : (submitting ? "Placing Order" : "Buy Now")}
            </button>
            <p className="text-zinc-800">{post.desc}</p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
