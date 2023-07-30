"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

function Nav() {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);
  const [toogleDropdown, settoggleDropdown] = useState(false);

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
        <div>
          <Link href="/" className="flex gap-2 flex-center">
            <Image
              src="/assets/images/logo.svg"
              alt="promptopialogo"
              width={30}
              height={30}
              className=" object-contain"
            />
            <p className="text-white text-xl font-semibold font-satoshi">
              JUGADIFFY
            </p>
          </Link>
        </div>
        <form className=" sm:flex hidden relative flex-center w-1/3 h-full  focus:border-2 focus:border-zinc-300">
          <input
            type="text"
            placeholder="Search for Products"
            value=""
            onChange={() => {}}
            required
            className=" border bg-zinc-900 border-zinc-800 p-2 pl-4 pr-4 rounded-lg text-zinc-500 w-full text-md"
          />
        </form>
        {session?.user ? (
          <div className="flex flex-between gap-3 md:gap-5">
            <Link href="/cart" className="black_btn">
              Cart
            </Link>
            <button type="button" onClick={signOut} className="outline_btn">
              Sign Out
            </button>
            <Link href="/Profile">
              <Image
                src={session?.user.image}
                width={37}
                height={37}
                className="rounded-full"
                alt="profile"
              ></Image>
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_btn"
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>
      {/* Mobile Navigation */}
      <div className="md:hidden flex flex-between relative mr-4">
        <Image
          src="/assets/images/logo.svg"
          width={40}
          height={40}
          onClick={() => {}}
          className=" border border-zinc-600 bg-zinc-900 rounded-lg"
        />
        <Link href="/" className="flex gap-2 flex-center">
          <Image
            src="/assets/images/logo.svg"
            alt="promptopialogo"
            width={30}
            height={30}
            className=" object-contain"
          />
          <p className="text-white text-xl font-semibold font-satoshi">
            JUGADIFFY
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
              onClick={() => settoggleDropdown((prev) => !prev)}
            />
            {toogleDropdown && (
              <div className="dropdown z-10">
                <form className="relative flex-center w-full h-full  focus:border-2 focus:border-zinc-300">
                  <input
                    type="text"
                    placeholder="Search for Products"
                    value=""
                    onChange={() => {}}
                    required
                    className=" border bg-zinc-900 border-zinc-800 p-2 pl-4 pr-4 rounded-lg text-zinc-500 w-full text-md"
                  />
                </form>
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
                  onClick={() => signIn(provider.id)}
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
