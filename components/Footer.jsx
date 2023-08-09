import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <section className=" w-full bg-blue-800 pt-4 mt-2">
      <div className=" md:flex-row flex-col flex flex-start w-50 md:pl-28 pl-8 mt-8 mb-8">
        <div>
          <Link href="/" className="flex gap-2 flex-center pl-4 md:pl-0">
            <Image
              src="/assets/images/LogoJug.png"
              alt="Logo"
              width={40}
              height={40}
              className=" object-contain"
            />
            <p className="text-white text-xl font-semibold font_style">
              JUGAADIFY
            </p>
          </Link>
        </div>
        <div className="flex flex-col ml-4">
          <Link
            href="/"
            className="hover:underline hover:text-white hover:underline-offset-4 text-zinc-200 p-1 text-sm font-semibold"
          >
            Home
          </Link>
          <Link
            href="/About"
            className="hover:underline hover:text-white hover:underline-offset-4 text-zinc-200 p-1 text-sm font-semibold"
          >
            About
          </Link>
          <Link
            href="/TermCondition"
            className="hover:underline hover:text-white hover:underline-offset-4 text-zinc-200 p-1 text-sm font-semibold"
          >
            Terms & Conditions
          </Link>
          <Link
            href="ShippingPolicy"
            className="hover:underline hover:text-white hover:underline-offset-4 text-zinc-200 p-1 text-sm font-semibold"
          >
            Shipping & Return Policy
          </Link>
          <Link
            href="PrivacyPolicy"
            className="hover:underline hover:text-white hover:underline-offset-4 text-zinc-200 p-1 text-sm font-semibold"
          >
            Privacy Policy
          </Link>
          <Link
            href="FAQ"
            className="hover:underline hover:text-white hover:underline-offset-4 text-zinc-200 p-1 text-sm font-semibold"
          >
            FAQ
          </Link>
        </div>
      </div>
      <hr className=" border-zinc-500" />
      <div className="md:flex-row  flex-col flex gap-2 pt-3 pb-3 text-zinc-200 flex-center">
        <p>© 2023 Jugadiffy. All rights reserved.</p>
        <span className="md:block hidden">|</span>
        <p>Loved by India</p>
      </div>
    </section>
  );
};

export default Footer;
