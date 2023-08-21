"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signOut, useSession, getProviders } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Drawer, Typography, IconButton } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

function Nav() {
  const router = useRouter();
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);
  const [toogleDropdown, settoggleDropdown] = useState(false);
  const [toogleDropdown2, settoggleDropdown2] = useState(false);
  const [toogleDropdownDesktop, settoggleDropdownDesktop] = useState(false);
  const [searchtext, setSearchtext] = useState({ text: "" });
  const [openRight, setOpenRight] = useState(false);
  const [openLeft, setOpenLeft] = useState(false);

  const openDrawerRight = () => setOpenRight(true);
  const closeDrawerRight = () => setOpenRight(false);
  const openDrawerLeft = () => setOpenLeft(true);
  const closeDrawerLeft = () => setOpenLeft(false);
  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();

      setProviders(response);
    };
    setUpProviders();
  }, []);
  return (
    <nav className="w-full pt-4 mb-6 ml-2 pr-4">
      {/* Desktop Nevigation  */}
      <div className="md:flex flex-between2 hidden mr-4">
        <div className="flex gap-8 md:gap-2 justify-start w-1/3 items-center ">
          <Link href="/" className="flex gap-2 flex-center">
            <Image
              src="/assets/images/LogoJug.png"
              alt="Logo"
              width={40}
              height={40}
              className=" object-contai"
            />
            <p className="text-xl text-zinc-800 font-semibold font_style">
              JUGAADIFY
            </p>
          </Link>
          <Link
            href="/search/?category=all"
            className="text-sm font-semibold bg-none text-zinc-700 hover:underline underline-offset-2"
          >
            All
          </Link>
          <Link
            href="/search/?category=Shirts"
            className="text-sm font-semibold bg-none text-zinc-700 hover:underline underline-offset-2"
          >
            Shirts
          </Link>
          <Link
            href="/search/?category=Mugs"
            className="text-sm font-semibold bg-none text-zinc-700 hover:underline underline-offset-2"
          >
            Mugs
          </Link>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            router.replace(
              `/search?product=${searchtext.text
                .toLowerCase()
                .replace(" ", "_")}`
            );
          }}
          className=" sm:flex hidden relative pr-2 focus:ring-2 focus:ring-offset-2 border border-zinc-500 rounded-xl overflow-hidden bg-zinc-200 focus:ring-zinc-700 flex-center w-1/3 h-full"
        >
          <input
            type="text"
            placeholder="Search for Products"
            value={searchtext.text}
            onChange={(e) =>
              setSearchtext({ ...searchtext, text: e.target.value })
            }
            required
            className="search-icon bg-zinc-200  p-2 pl-4 pr-4 placeholder:text-zinc-600 text-zinc-700 focus:outline-0 w-full text-md"
          />
        </form>
        {session?.user ? (
          <div className="flex w-1/3 justify-end">
            <Image
              src={session?.user.image}
              alt="logo"
              width={40}
              height={40}
              className=" object-contain rounded-full"
              onClick={() => settoggleDropdownDesktop((prev) => !prev)}
            />
            {toogleDropdownDesktop && (
              <div className="dropdownDesktop z-10">
                <Link
                  href="/profile"
                  className="dropdown_link"
                  onClick={() => settoggleDropdownDesktop(false)}
                >
                  My Profile
                </Link>
                <Link
                  href="/cart"
                  className="dropdown_link"
                  onClick={() => settoggleDropdownDesktop(false)}
                >
                  Cart
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    settoggleDropdownDesktop(false);
                    signOut();
                  }}
                  className="mt-5 w-full black_btn"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => {
                if (provider.id === "google") {
                  return (
                    <div className="w-1/3 flex justify-end items-end">
                      <button
                        type="button"
                        key={provider.name}
                        onClick={() => router.push("/Signin")}
                        className="black_btn "
                      >
                        Sign In
                      </button>
                    </div>
                  );
                }
              })}
          </>
        )}
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
          <div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                router.replace(
                  `/search?product=${searchtext.text
                    .toLowerCase()
                    .replace(" ", "_")}`
                );
              }}
            >
              <Input
                label="Search"
                variant="outlined"
                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                value={searchtext.text}
                onChange={(e) =>
                  setSearchtext({ ...searchtext, text: e.target.value })
                }
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
              <Link
                href="/search/?category=Shirt"
                className="font-semibold text-lg"
                onClick={closeDrawerLeft}
              >
                Women
              </Link>
              <Link
                href="/search?category=Mugs"
                className="font-semibold text-lg"
                onClick={closeDrawerLeft}
              >
                Hoddies & Jackets
              </Link>
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
        <div className="flex flex-row gap-2 ">
          {session?.user ? (
            <div className="flex">
              <Image
                src={session?.user.image}
                alt="promptopialogo"
                width={40}
                height={40}
                className=" object-contain rounded-full"
                onClick={() => {
                  settoggleDropdown((prev) => !prev);
                  settoggleDropdown2(false);
                }}
              />
              {toogleDropdown && (
                <div className="dropdown z-10">
                  <Link
                    href="/profile"
                    className="dropdown_link"
                    onClick={() => settoggleDropdown(false)}
                  >
                    My Profile
                  </Link>
                  <Link
                    href="/cart"
                    className="dropdown_link"
                    onClick={() => settoggleDropdown(false)}
                  >
                    Cart
                  </Link>
                  <button
                    type="button"
                    onClick={() => {
                      settoggleDropdown(false);
                      signOut();
                    }}
                    className="mt-5 w-full black_btn"
                  >
                    Sign Out
                  </button>
                </div>
              )}
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
            width={20}
            height={20}
            onClick={openDrawerRight}
          />
        <Drawer
          placement="right"
          open={openRight}
          onClose={closeDrawerRight}
          className="p-4 z-50"
        >
          <div className="mb-6 flex items-center justify-between">
            <Typography variant="h5" color="blue-gray">
              Cart
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
        </Drawer>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
