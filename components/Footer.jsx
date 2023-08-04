import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <section className=" w-full">
      <hr className=" border-zinc-500 w-10/12 ml-auto mr-auto mt-4" />
      <div className=" md:flex-row flex-col flex flex-start w-50 md:pl-28 pl-8 mt-8 mb-8">
        <div>
          <Link href="/" className="flex gap-2 flex-center pl-4 md:pl-0">
            <Image
              src="/assets/images/LogoJug.png"
              alt="promptopialogo"
              width={40}
              height={40}
              className=" object-contain mix-blend-screen"
            />
            <p className="text-white text-xl font-semibold font_style">
              JUGAADIFY
            </p>
          </Link>
        </div>
        <div className="flex flex-col ml-4">
          <Link
            href="/"
            className="hover:underline hover:text-zinc-200 hover:underline-offset-4 text-zinc-400 p-1 text-sm font-semibold"
          >
            Home
          </Link>
          <Link
            href="/About"
            className="hover:underline hover:text-zinc-200 hover:underline-offset-4 text-zinc-400 p-1 text-sm font-semibold"
          >
            About
          </Link>
          <Link
            href="/TermCondition"
            className="hover:underline hover:text-zinc-200 hover:underline-offset-4 text-zinc-400 p-1 text-sm font-semibold"
          >
            Terms & Conditions
          </Link>
          <Link
            href="ShippingPolicy"
            className="hover:underline hover:text-zinc-200 hover:underline-offset-4 text-zinc-400 p-1 text-sm font-semibold"
          >
            Shipping & Return Policy
          </Link>
          <Link
            href="PrivacyPolicy"
            className="hover:underline hover:text-zinc-200 hover:underline-offset-4 text-zinc-400 p-1 text-sm font-semibold"
          >
            Privacy Policy
          </Link>
          <Link
            href="FAQ"
            className="hover:underline hover:text-zinc-200 hover:underline-offset-4 text-zinc-400 p-1 text-sm font-semibold"
          >
            FAQ
          </Link>
        </div>
      </div>
      <hr className=" border-zinc-500" />
      <div className="md:flex-row    flex-col flex gap-2 mt-3 mb-3 text-zinc-400 flex-center">
        <p>© 2023 Jugadiffy. All rights reserved.</p>
        <span className="md:block hidden">|</span>
        <p>Designed in California</p>
      </div>
    </section>
  );
};

export default Footer;
