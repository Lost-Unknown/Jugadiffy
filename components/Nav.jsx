"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { useRouter } from "next/navigation";

function Nav() {
  const router = useRouter();
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);
  const [toogleDropdown, settoggleDropdown] = useState(false);
  const [toogleDropdown2, settoggleDropdown2] = useState(false);
  const [toogleDropdownDesktop, settoggleDropdownDesktop] = useState(false);


  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();

      setProviders(response);
    };
    setUpProviders();
  }, []);
  return (
    <nav className="w-full mt-4 mb-6 ml-2 mr-4">
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
          <Link href="/search/?category=all" className="text-sm font-semibold bg-none text-zinc-700 hover:underline underline-offset-2">All</Link>
          <Link href="/search/?category=Shirts" className="text-sm font-semibold bg-none text-zinc-700 hover:underline underline-offset-2">Shirts</Link>
          <Link href="/search/?category=Mugs" className="text-sm font-semibold bg-none text-zinc-700 hover:underline underline-offset-2">Mugs</Link>
        </div>
        <form className=" sm:flex hidden relative pr-2 focus:ring-2 focus:ring-offset-2 border border-zinc-500 rounded-xl overflow-hidden bg-zinc-200 focus:ring-zinc-700 flex-center w-1/3 h-full">
          <input
            type="text"
            placeholder="Search for Products"
            onChange={() => {}}
            required
            className="search-icon bg-zinc-200  placeholder:text-zinc-700 p-2 pl-4 pr-4 text-zinc-700 focus:outline-0 w-full text-md"
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
              Object.values(providers).map((provider) => (
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
              ))}
          </>
        )}
      </div>
      {/* Mobile Navigation */}
      <div className="md:hidden flex flex-between relative mr-4">
        <Image
          src="/assets/images/hamburger.svg"
          width={35}
          height={35}
          onClick={() => {settoggleDropdown2((prev) => !prev);
            settoggleDropdown(false);
          }}
          className=" border border-zinc-600 bg-zinc-200 rounded-lg text-zinc-700"
        />
        {toogleDropdown2 && (
              <div className="dropdown z-10 transition  duration-200">
                <form className=" sm:flex hidden relative overflow-hidden bg-zinc-200 pr-2 focus:ring-2 focus:ring-offset-2 border border-zinc-800 rounded-xl  focus:ring-zinc-700 flex-center w-full h-full">
                  <input
                    type="text"
                    placeholder="Search for Products"
                    onChange={() => {}}
                    required
                    className="search-icon bg-zinc-200  p-2 pl-4 pr-4 placeholder:text-zinc-600 text-zinc-700 focus:outline-0 w-full text-md"
                  />
                </form>
                <Link
                  href="/search?category=all"
                  className="dropdown_link"
                  onClick={() => settoggleDropdown(false)}
                >
                  All
                </Link>
                <Link
                  href="/search/?category=Shirt"
                  className="dropdown_link"
                  onClick={() => settoggleDropdown(false)}
                >
                  Shirts
                </Link>
                <Link
                  href="/search?category=Mugs"
                  className="dropdown_link"
                  onClick={() => settoggleDropdown(false)}
                >
                  Mugs
                </Link>
              </div>
            )}
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
        {session?.user ? (
          <div className="flex">
            <Image
              src={session?.user.image}
              alt="promptopialogo"
              width={40}
              height={40}
              className=" object-contain rounded-full"
              onClick={() => {settoggleDropdown((prev) => !prev);
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
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => router.push("/Signin")}
                  className="black_btn"
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
}

export default Nav;
