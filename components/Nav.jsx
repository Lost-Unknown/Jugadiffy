"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Drawer, Typography, IconButton } from "@material-tailwind/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Input } from "@nextui-org/react";
import { Divider } from "@nextui-org/react";
import CartCardList from "./CartCardList";
function Nav() {
  const router = useRouter();
  const [searchtext, setSearchtext] = useState({ text: "" });
  const [openRight, setOpenRight] = useState(false);
  const [openLeft, setOpenLeft] = useState(false);
  const openDrawerRight = () => setOpenRight(true);
  const closeDrawerRight = () => setOpenRight(false);
  const openDrawerLeft = () => setOpenLeft(true);
  const closeDrawerLeft = () => setOpenLeft(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchItems = () => {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      const cartArray = [];

      for (const key in cart) {
        if (key !== "num" && cart.hasOwnProperty(key)) {
          cartArray.push(cart[key]);
        }
      }

      setPosts(cartArray);
    };

    if (typeof window !== "undefined") {
      // Ensure localStorage operations are only done on the client side
      fetchItems();
    }
  }, []);

  const removeFromCart = (itemId) => {
    if (typeof window !== "undefined") {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      const cartArray = [];

      for (const key in cart) {
        if (key !== "num" && cart.hasOwnProperty(key)) {
          cartArray.push(cart[key]);
        }
      }
      const updatedCart = cartArray.filter((item) => item.productid !== itemId);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      setPosts(updatedCart);
    }
  };

  const refresh = ()=>{
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
      const cartArray = [];

      for (const key in cart) {
        if (key !== "num" && cart.hasOwnProperty(key)) {
          cartArray.push(cart[key]);
        }
      }

      setPosts(cartArray);
  }

  const increaseQuantity = (itemId) => {
    if (typeof window !== "undefined") {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      const cartArray = [];

      for (const key in cart) {
        if (key !== "num" && cart.hasOwnProperty(key)) {
          cartArray.push(cart[key]);
        }
      }
      const updatedCart = cartArray.map((item) => {
        if (item.productid === itemId) {
          item.quantity += 1;
        }
        return item;
      });
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      setPosts(updatedCart);
    }
  };

  const decreaseQuantity = (itemId) => {
    if (typeof window !== "undefined") {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      const cartArray = [];

      for (const key in cart) {
        if (key !== "num" && cart.hasOwnProperty(key)) {
          cartArray.push(cart[key]);
        }
      }
      const updatedCart = cartArray.map((item) => {
        if (item.productid === itemId && item.quantity > 1) {
          item.quantity -= 1;
        }
        return item;
      });
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      setPosts(updatedCart);
    }
  };
  return (
    <nav className="w-full pt-4 mb-6 pl-4 pr-4">
      {/* Desktop Nevigation  */}
      <div className="md:flex flex-between2 hidden mr-4">
        <div className="flex gap-8 md:gap-2 justify-start w-4/6 items-center ">
          <div className="flex gap-10 justify-start items-center">
            <Link href="/" className="flex gap-2 flex-center">
              <Image
                src="/assets/images/Logo2.png"
                alt="Logo"
                width={125}
                height={50}
                className=""
              />
            </Link>
            <Link
              href="/search/?category=all"
              className="text-xl font-bold bg-none text-zinc-700 hover:underline underline-offset-2"
            >
              Men
            </Link>
            <Link
              href="/search/?category=Shirts"
              className="text-xl font-bold bg-none text-zinc-700 hover:underline underline-offset-2"
            >
              Women
            </Link>
            <Link
              href="/search/?category=Mugs"
              className="text-xl font-bold bg-none text-zinc-700 hover:underline underline-offset-2"
            >
              Hoodies
            </Link>
            <Link
              href="/search/?category=Mugs"
              className="text-xl font-bold bg-none text-zinc-700 hover:underline underline-offset-2"
            >
              Jackets
            </Link>
          </div>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            router.replace(
              `/search?product=${searchtext.text
                .toLowerCase()
                .replace(" ", "_")}`
            );
            setSearchtext({ ...searchtext, text: undefined });
          }}
        >
          <Input
            isClearable
            value={searchtext.text}
            onChange={(e) =>
              setSearchtext({ ...searchtext, text: e.target.value })
            }
            classNames={{
              label: "text-black/50 dark:text-white/90",
              input: [
                "bg-transparent",
                "text-black/90 dark:text-white/90",
                "placeholder:text-default-700/50 dark:placeholder:text-white/60",
              ],
              innerWrapper: "bg-transparent",
              inputWrapper: [
                "shadow-xl",
                "bg-default-200/50",
                "dark:bg-default/60",
                "backdrop-blur-xl",
                "backdrop-saturate-200",
                "hover:bg-default-200/70",
                "dark:hover:bg-default/70",
                "group-data-[focused=true]:bg-default-200/50",
                "dark:group-data-[focused=true]:bg-default/60",
                "!cursor-text",
              ],
            }}
            placeholder="Search..."
            startContent={<MagnifyingGlassIcon className="h-5 w-5" />}
          />
        </form>
        <div className="flex gap-3">
          <Image
            src="assets/images/Bag.svg"
            alt="cart"
            width={25}
            height={25}
            onClick={openDrawerRight}
          />
        </div>
      </div>
      {/* Mobile Navigation */}
      <div className="md:hidden flex flex-between relative pr-4">
        <Image
          src="/assets/images/hamburger.svg"
          width={35}
          height={35}
          onClick={openDrawerLeft}
          className=" rounded-lg text-zinc-700"
        />
        <Drawer
          placement="left"
          open={openLeft}
          onClose={closeDrawerLeft}
          className="p-4 z-50"
        >
          <div className="mb-6 flex items-center justify-between">
            <Typography variant="h5" color="blue-gray">
              Jugaadify
            </Typography>
            <IconButton
              variant="text"
              color="blue-gray"
              onClick={closeDrawerLeft}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </IconButton>
          </div>
          <Divider className="my-4" />
          <div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                router.replace(
                  `/search?product=${searchtext.text
                    .toLowerCase()
                    .replace(" ", "_")}`
                );
                setOpenLeft(false);
                setSearchtext({ ...searchtext, text: undefined });
              }}
            >
              <Input
                label="Search"
                isClearable
                radius="lg"
                value={searchtext.text}
                onChange={(e) =>
                  setSearchtext({ ...searchtext, text: e.target.value })
                }
                classNames={{
                  label: "text-black/50 dark:text-white/90",
                  input: [
                    "bg-transparent",
                    "text-black/90 dark:text-white/90",
                    "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                  ],
                  innerWrapper: "bg-transparent",
                  inputWrapper: [
                    "shadow-xl",
                    "bg-default-200/50",
                    "dark:bg-default/60",
                    "backdrop-blur-xl",
                    "backdrop-saturate-200",
                    "hover:bg-default-200/70",
                    "dark:hover:bg-default/70",
                    "group-data-[focused=true]:bg-default-200/50",
                    "dark:group-data-[focused=true]:bg-default/60",
                    "!cursor-text",
                  ],
                }}
                placeholder="Type to search..."
                startContent={<MagnifyingGlassIcon className="h-5 w-5" />}
              />
            </form>
            <div className="w-full flex flex-col gap-3 pt-4">
              <Link
                href="/search?category=all"
                className="font-semibold text-lg"
                onClick={closeDrawerLeft}
              >
                Men
              </Link>
              <Divider />
              <Link
                href="/search/?category=Shirt"
                className="font-semibold text-lg"
                onClick={closeDrawerLeft}
              >
                Women
              </Link>
              <Divider />
              <Link
                href="/search?category=Mugs"
                className="font-semibold text-lg"
                onClick={closeDrawerLeft}
              >
                Hoddies
              </Link>

              <Divider />
              <Link
                href="/search?category=Mugs"
                className="font-semibold text-lg"
                onClick={closeDrawerLeft}
              >
                Jackets
              </Link>
              <Divider />
              <Link
                href="/search?category=Mugs"
                className="font-semibold text-lg"
                onClick={closeDrawerLeft}
              >
                Others
              </Link>
            </div>
          </div>
        </Drawer>
        <Link href="/" className="flex gap-2 flex-center">
          <Image
            src="/assets/images/LogoJug.png"
            alt="promptopialogo"
            width={40}
            height={40}
            className=" object-contain"
          />
          <p className="text-black text-xl font-semibold font_style">
            JUGAADIFY
          </p>
        </Link>
        <div className="flex gap-3">
          <Image
            src="assets/images/Bag.svg"
            alt="cart"
            width={25}
            height={25}
            onClick={openDrawerRight}
          />
        </div>
      </div>
      <Drawer
        placement="right"
        open={openRight}
        size={600}
        onClose={closeDrawerRight}
        className="p-4 z-50 right-0 h-screen"
      >
        <div className="mb-6 h-cart1  flex items-center justify-between">
          <Typography variant="h4" color="blue-gray">
            Shopping Cart
          </Typography>
          <IconButton
            variant="text"
            color="blue-gray"
            onClick={closeDrawerRight}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <Divider />
        <div className="h-cart2 overflow-y-scroll overflow-x-hidden">
          <CartCardList
            data={posts}
            refresh={refresh}
            removeFromCart={removeFromCart}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
          />
        </div>
        <Divider />
        {posts.length === 0 ? (
          <></>
        ) : (
          <div className="flex h-cart1 gap-3 justify-center items-center">
            
            <div className=" w-1/3 h-full flex flex-col justify-center">
              {/* <p className="font-semibold">₹{posts.reduce((sum,item)=>sum+item.Productid.price,0)}</p> */}
              <p className="text-zinc-500">Total Payable</p>
            </div>
            <button className="w-2/3 h-5/6 rounded-full bg-blue-600 text-white">
              Proceed to Buy
            </button>
          </div>
        )}
      </Drawer>
    </nav>
  );
}

export default Nav;
