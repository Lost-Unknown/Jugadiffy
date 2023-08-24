import ChipList from "./ColourList";
import { useEffect, useState } from "react";
import ProductImage from "./ProductImage";
import { Card, Skeleton } from "@nextui-org/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { Input, Textarea } from "@nextui-org/react";
const ProductPage = ({ post, setPost, loading }) => {
  const [selectedColour, setSelectedColour] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [Added, setAdded] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [detail, setDetail] = useState({
    name: "",
    email: "",
    mobile: "",
    str: "",
    city: "",
    zip: "",
  });
  const setDetails = () => {
    const data = {
      name: detail.name,
      email: detail.email,
      mobile: detail.mobile,
      str: detail.str,
      city: detail.city,
      zip: detail.zip,
    };

    localStorage.setItem("userdat", JSON.stringify(data));
    const chat = `Hello Jugaadify, \nI would like to purchase the folowing item \n\nProduct Name: ${post.pname} \nColour: ${selectedColour} \nSize: ${selectedSize} \n\nHere are my Details:-\nName: ${detail.name} \nEmail: ${detail.email} \nMobile: ${detail.mobile}\nAddress:-\n${detail.str}\n${detail.city}  ${detail.zip}`;
    const encodedChat = encodeURIComponent(chat);
    window.open(`https://wa.me/918860510084?text=${encodedChat}`);
  };
  useEffect(() => {
    const fetchItems = () => {
      const getdata = localStorage.getItem("userdat");
      if (getdata) {
        setDetail(JSON.parse(getdata));
      }
    };
    if (typeof window !== "undefined") {
      // Ensure localStorage operations are only done on the client side
      fetchItems();
    }
  }, []);
  const handleColorClick = (color) => {
    setSelectedColour(color);
  };

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const isAddToCartDisabled = !(selectedColour && selectedSize);

  const handleAddToCart = () => {
    if (!isAddToCartDisabled) {
      setSubmitting(true);
      // Make the API post call to save the selected color and size to the database
      const cart = JSON.parse(localStorage.getItem("cart")) || [];

      const product = {
        productid: post.id,
        productname: "",
        color: selectedColour,
        size: selectedSize,
        quantity: 1,
        price: 0,
      };

      const existingProductIndex = cart.findIndex(
        (item) => item.productid === product.productid
      );

      if (existingProductIndex !== -1) {
        // Increase the quantity of the existing product
        cart[existingProductIndex].quantity += 1;
      } else {
        cart.push({ ...product, quantity: 1 });
      }

      localStorage.setItem("cart", JSON.stringify(cart));

      setSubmitting(false);
      setAdded(true);
    }
  };
  return (
    <section className="w-full">
      {loading ? (
        <div className="flex w-full md:flex-row gap-4 flex-col p-2 bg-white rounded-xl">
          <Skeleton className="rounded-lg mb-2 md:w-2/3 w-full">
            <div className="md:h-unit-9xl h-72 rounded-lg bg-default-300"></div>
          </Skeleton>
          <div className="md:w-1/3 w-full">
            <div className="space-y-3">
              <Skeleton className="w-3/5 rounded-lg">
                <div className="md:h-12 h-4 w-3/5 rounded-lg bg-default-200"></div>
              </Skeleton>
              <Skeleton className="w-4/5 rounded-lg">
                <div className="md:h-12 h-4 w-4/5 rounded-lg bg-default-200"></div>
              </Skeleton>
              <Skeleton className="w-2/5 rounded-lg">
                <div className="md:h-12 h-4 w-2/5 rounded-lg bg-default-300"></div>
              </Skeleton>
              <Skeleton className="w-2/5 rounded-lg">
                <div className="md:h-12 h-4 w-2/5 rounded-lg bg-default-300"></div>
              </Skeleton>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full">
          <div className="flex w-full md:flex-row flex-col p-1 bg-white rounded-xl">
            <div className=" md:w-3/5 w-full flex flex-center">
              <ProductImage data={post.image} />
            </div>
            <div className=" md:w-2/5 w-full flex flex-col gap-1 md:p-16 p-4">
              <h2 className=" text-zinc-800 text-5xl font-semibold font-sans">
                {post.pname}
              </h2>
              <div className="flex py-0.5 gap-2 items-end">
                <p className="text-black font-semibold text-xl">
                  ₹{post.price}
                </p>
                <p className="text-zinc-500 text-lg line-through">
                  ₹{post.price2}
                </p>
                <p className="text-green-500 text-xl font-semibold">
                  {Math.trunc(((post.price2 - post.price) / post.price2) * 100)}
                  % Off
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
                  {Added
                    ? "Added to Cart"
                    : submitting
                    ? "Adding to Cart..."
                    : "Add To Cart"}
                </button>
                <>
                  <button
                    onClick={onOpen}
                    disabled={isAddToCartDisabled || submitting}
                    className={`w-full rounded-full pt-4 pb-4 text-white ${
                      isAddToCartDisabled
                        ? "bg-gray-300 cursor-not-allowed"
                        : "bg-blue-600"
                    }`}
                    color="primary"
                  >
                    Buy Now
                  </button>
                  <Modal
                    isOpen={isOpen}
                    onOpenChange={onOpenChange}
                    placement="auto"
                  >
                    <ModalContent>
                      {(onClose) => (
                        <>
                          <ModalHeader className="flex flex-col gap-1">
                            Order Details
                          </ModalHeader>
                          <ModalBody>
                            <Input
                              autoFocus
                              value={detail.name}
                              label="Name"
                              onChange={(e) =>
                                setDetail({ ...detail, name: e.target.value })
                              }
                              placeholder="Enter your name"
                              variant="bordered"
                            />
                            <Input
                              autoFocus
                              label="Email"
                              value={detail.email}
                              onChange={(e) =>
                                setDetail({ ...detail, email: e.target.value })
                              }
                              placeholder="Enter your email"
                              variant="bordered"
                            />
                            <Input
                              autoFocus
                              value={detail.mobile}
                              onChange={(e) =>
                                setDetail({ ...detail, mobile: e.target.value })
                              }
                              label="Mobile"
                              placeholder="Enter your mobile no."
                              variant="bordered"
                            />
                            <Textarea
                              label="Address"
                              variant="bordered"
                              value={detail.str}
                              onChange={(e) =>
                                setDetail({ ...detail, str: e.target.value })
                              }
                              labelPlacement="outside"
                              placeholder="Street Address"
                              className=""
                            />
                            <div className="flex gap-2">
                              <Input
                                autoFocus
                                label="City"
                                value={detail.city}
                                onChange={(e) =>
                                  setDetail({ ...detail, city: e.target.value })
                                }
                                className="w-1/2"
                                placeholder="Enter your city"
                                variant="bordered"
                              />
                              <Input
                                autoFocus
                                className="w-1/2"
                                label="Zip code"
                                value={detail.zip}
                                onChange={(e) =>
                                  setDetail({ ...detail, zip: e.target.value })
                                }
                                placeholder="ZIP"
                                variant="bordered"
                              />
                            </div>
                          </ModalBody>
                          <ModalFooter>
                            <Button
                              color="danger"
                              variant="flat"
                              onPress={onClose}
                            >
                              Close
                            </Button>
                            <Button
                              className=" px-3 rounded-xl text-white bg-blue-600"
                              onPress={setDetails}
                            >
                              Continue
                            </Button>
                          </ModalFooter>
                        </>
                      )}
                    </ModalContent>
                  </Modal>
                </>
                <p className="text-zinc-800">{post.desc}</p>
              </form>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductPage;
