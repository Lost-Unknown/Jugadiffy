"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signOut, useSession, getProviders } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Drawer, Typography, IconButton } from "@material-tailwind/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Input } from "@nextui-org/react";
import { Divider } from "@nextui-org/react";
import CartCardList from "./CartCardList";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";

function Nav() {
  const router = useRouter();
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);
  const [searchtext, setSearchtext] = useState({ text: "" });
  const [openRight, setOpenRight] = useState(false);
  const [openLeft, setOpenLeft] = useState(false);
  const openDrawerRight = () => setOpenRight(true);
  const closeDrawerRight = () => setOpenRight(false);
  const openDrawerLeft = () => setOpenLeft(true);
  const closeDrawerLeft = () => setOpenLeft(false);
  const [posts, setPosts] = useState([]);
  const [UserId, setUserId] = useState(null);
  useEffect(() => {
    // Set the userId when the session data is available
    if (session?.user?.id) {
      setUserId(session.user.id);
    }
  }, [session?.user?.id]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        if (UserId) {
          const response = await fetch(`/api/cart/${UserId}`);
          if (!response.ok) {
            // Handle the case when the response is not successful (e.g., 404 or 500)
            console.error("Error fetching cart items:", response.statusText);
            return;
          }
          const data = await response.json();
          setPosts(data.cart);
        }
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };

    // Call fetchItems when userId is available
    if (UserId) {
      fetchItems();
    }
  }, [UserId]);
  const removeFromCart = async (itemId) => {
    try {
      const response = await fetch(`/api/cart/${itemId}`, {
        method: "DELETE",
      });
      if (response.ok) {
        // Remove the item from posts state
        setPosts(posts.filter((post) => post._id !== itemId));
        console.log("Cart item removed successfully");
      } else {
        console.error("Failed to remove cart item");
      }
    } catch (error) {
      console.error("Error removing cart item:", error);
    }
  };
  const increaseQuantity = async (itemId) => {
    try {
      const updatedPosts = posts.map((post) => {
        if (post._id === itemId) {
          post.quantity += 1;
        }
        return post;
      });

      const response = await fetch(`/api/cart/${itemId}/increase`, {
        method: "PUT", // Use the PUT method for updates
      });

      if (response.ok) {
        setPosts(updatedPosts);
        // You can show a success message or update the UI accordingly
        console.log("Cart item quantity increased in the database");
      } else {
        // Handle error response from the server
        console.error("Failed to increase cart item quantity in the database");
      }
    } catch (error) {
      console.error(
        "An error occurred while increasing cart item quantity:",
        error
      );
    }
  };

  const decreaseQuantity = async (itemId) => {
    try {
      const updatedPosts = posts.map((post) => {
        if (post._id === itemId && post.quantity > 1) {
          post.quantity -= 1;
        }
        return post;
      });

      const response = await fetch(`/api/cart/${itemId}/decrease`, {
        method: "PUT", // Use the PUT method for updates
      });

      if (response.ok) {
        setPosts(updatedPosts);
        // You can show a success message or update the UI accordingly
        console.log("Cart item quantity decreased in the database");
      } else {
        // Handle error response from the server
        console.error("Failed to decrease cart item quantity in the database");
      }
    } catch (error) {
      console.error(
        "An error occurred while decreasing cart item quantity:",
        error
      );
    }
  };

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();

      setProviders(response);
    };
    setUpProviders();
  }, []);
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
          {session?.user ? (
            <div className="flex justify-end">
              <Dropdown>
                <DropdownTrigger>
                  <button>
                  <Image
                    src={session?.user.image}
                    alt="logo"
                    width={40}
                    height={40}
                    className=" object-contain rounded-full"
                  />
                  </button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions">
                  <DropdownItem>
                    <Link
                      href="/profile"
                    >
                      My Profile
                    </Link>
                  </DropdownItem>
                  <DropdownItem
                    className="text-danger"
                    color="danger"
                    onClick={() => {
                      signOut();
                    }}
                  >
                    Sign Out
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          ) : (
            <>
              {providers &&
                Object.values(providers).map((provider) => {
                  if (provider.id === "google") {
                    return (
                      <Image
                        src="assets/images/User.svg"
                        alt="user"
                        width={20}
                        height={20}
                        type="button"
                        key={provider.name}
                        onClick={() => router.push("/Signin")}
                      />
                    );
                  }
                })}
            </>
          )}
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
          {session?.user ? (
            <div className="flex justify-end">
              <Dropdown>
                <DropdownTrigger>
                  <button>
                  <Image
                    src={session?.user.image}
                    alt="logo"
                    width={40}
                    height={40}
                    className=" object-contain rounded-full"
                  />
                  </button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions">
                  <DropdownItem>
                    <Link
                      href="/profile"
                    >
                      My Profile
                    </Link>
                  </DropdownItem>
                  <DropdownItem
                    className="text-danger"
                    color="danger"
                    onClick={() => {
                      signOut();
                    }}
                  >
                    Sign Out
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          ) : (
            <>
              {providers &&
                Object.values(providers).map((provider) => {
                  if (provider.id === "google") {
                    return (
                      <Image
                        src="assets/images/User.svg"
                        alt="user"
                        width={20}
                        height={20}
                        type="button"
                        key={provider.name}
                        onClick={() => router.push("/Signin")}
                      />
                    );
                  }
                })}
            </>
          )}
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
            removeFromCart={removeFromCart}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
          />
        </div>
        <Divider />
        <div className="flex h-cart1 gap-3 justify-center items-center">
          <div className=" w-1/3 h-full flex flex-col justify-center">
            <p className="font-semibold">₹{posts.reduce((sum,item)=>sum+item.Productid.price,0)}</p>
            <p className="text-zinc-500">Total Payable</p>
          </div>
          <button className="w-2/3 h-5/6 rounded-full bg-blue-600 text-white">
            Proceed to Buy
          </button>
        </div>
      </Drawer>
    </nav>
  );
}

export default Nav;
