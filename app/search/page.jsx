"use client";
import React from "react";
import ProductFeed from "@components/ProductFeed";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
const Search = () => {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const [toogleDropdownPrice, settoggleDropdownPrice] = useState(false);
  const [toogleDropdownColour, settoggleDropdownColour] = useState(false);
  const [toogleDropdownSize, settoggleDropdownSize] = useState(false);
  const [toogleDropdownCategory, settoggleDropdownCategory] = useState(false);
  const [toogleDropdownFilter, settoggleDropdownFilter] = useState(false);

  return (
    <section>
      {/* Mobile Search */}
      <div className="md:hidden flex flex-col gap-2 justify-center items-center">
        <div
          onClick={() => settoggleDropdownCategory((prev) => !prev)}
          className="w-full border rounded-md border-zinc-500 text-zinc-300 p-2"
        >
          <p className="text-zinc-500">Category</p>
          {toogleDropdownCategory && (
            <div className="flex flex-col">
              <a
                href={"/search?category=all"}
                className="cat-link cursor-pointer"
              >
                All
              </a>
              <a
                href={"/search?category=Men"}
                className="cat-link cursor-pointer"
              >
                Men
              </a>
              <a
                href="/search?category=Women"
                className="cat-link cursor-pointer"
              >
                Women
              </a>
              <a
                href="/search?category=Kids"
                className="cat-link cursor-pointer"
              >
                Kids
              </a>
              <a
                href="/search?category=Mugs"
                className="cat-link cursor-pointer"
              >
                Mugs
              </a>
              <a
                href="/search?category=Hoddies"
                className="cat-link cursor-pointer"
              >
                Hoodies
              </a>
            </div>
          )}
        </div>
        <div className="w-full border rounded-md border-zinc-500 text-zinc-300 p-2">
          <p
            className="text-zinc-500"
            onClick={() => settoggleDropdownFilter((prev) => !prev)}
          >
            Filter
          </p>
          {toogleDropdownFilter && (
            <div className="py-2 ">
              <p
                onClick={() => settoggleDropdownPrice((prev) => !prev)}
                className="w-full text-zinc-600 p-2 my-2  text-xl ring-1 ring-zinc-950 rounded-md bg-slate-50"
              >
                Price
              </p>
              {toogleDropdownPrice && (
                <div className="w-full flex gap-1 flex-col">
                  <div className="flex p-2 bg-slate-100 rounded-md gap-4">
                    <input type="radio" />
                    <p className="text-zinc-600">Less than ₹500</p>
                  </div>
                  <div className="flex p-2 bg-slate-100 rounded-md gap-4">
                    <input type="radio" />
                    <p className="text-zinc-600">₹500 - ₹1000</p>
                  </div>
                  <div className="flex p-2 bg-slate-100 rounded-md gap-4">
                    <input type="radio" />
                    <p className="text-zinc-600">₹1000 - ₹1500</p>
                  </div>
                  <div className="flex p-2 bg-slate-100 rounded-md gap-4">
                    <input type="radio" />
                    <p className="text-zinc-600">₹1500 - ₹2000</p>
                  </div>
                  <div className="flex p-2 bg-slate-100 rounded-md gap-4">
                    <input type="radio" />
                    <p className="text-zinc-600">More than ₹2000</p>
                  </div>
                </div>
              )}
              <p
                onClick={() => settoggleDropdownColour((prev) => !prev)}
                className="w-full text-zinc-600 p-2 my-2  text-xl ring-1 ring-zinc-950 rounded-md bg-slate-50"
              >
                Colour
              </p>
              {toogleDropdownColour && (
                <div className="w-full flex gap-1 flex-col">
                  <div className="flex p-2 item-center bg-slate-100 text-zinc-200 rounded-md gap-4">
                    <input className="" type="radio" />
                    <div className=" w-6 h-6 bg-black rounded-full ring-2 ring-zinc-950"></div>
                    <p className="text-zinc-600">Black</p>
                  </div>
                  <div className="flex p-2 item-center bg-slate-100 text-zinc-200 rounded-md gap-4">
                    <input className="" type="radio" />
                    <div className=" w-6 h-6 bg-white rounded-full ring-2 ring-zinc-950"></div>
                    <p className="text-zinc-600">White</p>
                  </div>
                  <div className="flex p-2 item-center bg-slate-100 text-zinc-200 rounded-md gap-4">
                    <input className="" type="radio" />
                    <div className=" w-6 h-6 bg-red-600 rounded-full ring-2 ring-zinc-950"></div>
                    <p className="text-zinc-600">Red</p>
                  </div>
                  <div className="flex p-2 item-center bg-slate-100 text-zinc-200 rounded-md gap-4">
                    <input className="" type="radio" />
                    <div className=" w-6 h-6 bg-pink-500 rounded-full ring-2 ring-zinc-950"></div>
                    <p className="text-zinc-600">Pink</p>
                  </div>
                  <div className="flex p-2 item-center bg-slate-100 text-zinc-200 rounded-md gap-4">
                    <input className="" type="radio" />
                    <div className=" w-6 h-6 bg-purple-600 rounded-full ring-2 ring-zinc-950"></div>
                    <p className="text-zinc-600">Purple</p>
                  </div>
                  <div className="flex p-2 item-center bg-slate-100 text-zinc-200 rounded-md gap-4">
                    <input className="" type="radio" />
                    <div className=" w-6 h-6 bg-blue-600 rounded-full ring-2 ring-zinc-950"></div>
                    <p className="text-zinc-600">Blue</p>
                  </div>
                  <div className="flex p-2 item-center bg-slate-100 text-zinc-200 rounded-md gap-4">
                    <input className="" type="radio" />
                    <div className=" w-6 h-6 bg-green-400 rounded-full ring-2 ring-zinc-950"></div>
                    <p className="text-zinc-600">Green</p>
                  </div>
                  <div className="flex p-2 item-center bg-slate-100 text-zinc-200 rounded-md gap-4">
                    <input className="" type="radio" />
                    <div className=" w-6 h-6 bg-yellow-400 rounded-full ring-2 ring-zinc-950"></div>
                    <p className="text-zinc-600">Yellow</p>
                  </div>
                  <div className="flex p-2 item-center bg-slate-100 text-zinc-200 rounded-md gap-4">
                    <input className="" type="radio" />
                    <div className=" w-6 h-6 bg-orange-100 rounded-full ring-2 ring-zinc-950"></div>
                    <p className="text-zinc-600">Sand</p>
                  </div>
                  <div className="flex p-2 item-center bg-slate-100 text-zinc-200 rounded-md gap-4">
                    <input className="" type="radio" />
                    <div className=" w-6 h-6 bg-blue-300 rounded-full ring-2 ring-zinc-950"></div>
                    <p className="text-zinc-600">Powder Blue</p>
                  </div>
                </div>
              )}
              <p
                onClick={() => settoggleDropdownSize((prev) => !prev)}
                className="w-full text-zinc-600 p-2 my-2  text-xl ring-1 ring-zinc-950 rounded-md bg-slate-50"
              >
                Price
              </p>
              {toogleDropdownSize && (
                <div className="w-full flex gap-1 flex-col">
                  <div className="flex p-2 bg-slate-100 rounded-md gap-4">
                    <input type="radio" />
                    <p className="text-zinc-600">XS</p>
                  </div>
                  <div className="flex p-2 bg-slate-100 rounded-md gap-4">
                    <input type="radio" />
                    <p className="text-zinc-600">S</p>
                  </div>
                  <div className="flex p-2 bg-slate-100 rounded-md gap-4">
                    <input type="radio" />
                    <p className="text-zinc-600">M</p>
                  </div>
                  <div className="flex p-2 bg-slate-100 rounded-md gap-4">
                    <input type="radio" />
                    <p className="text-zinc-600">L</p>
                  </div>
                  <div className="flex p-2 bg-slate-100 rounded-md gap-4">
                    <input type="radio" />
                    <p className="text-zinc-600">XL</p>
                  </div>
                  <div className="flex p-2 bg-slate-100 rounded-md gap-4">
                    <input type="radio" />
                    <p className="text-zinc-600">XXL</p>
                  </div>
                  <div className="flex p-2 bg-slate-100 rounded-md gap-4">
                    <input type="radio" />
                    <p className="text-zinc-600">XXXL</p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
        <ProductFeed category={category} />
      </div>
      {/* Desktop Search */}
      <div className="md:flex hidden w-full">
        <div className=" w-1/12">
          <p className="text-zinc-700 p-1">Collection</p>
          <div className="flex flex-col">
            <a
              href="/search?category=all"
              className="cat-link cursor-pointer"
            >
              All
            </a>
            <a
              href="/search?category=Men"
              className="cat-link cursor-pointer"
            >
              Men
            </a>
            <a
              href="/search?category=Women"
              className="cat-link cursor-pointer"
            >
              Women
            </a>
            <a
              href="/search?category=Kids"
              className="cat-link cursor-pointer"
            >
              Kids
            </a>
            <a
              href="/search?category=Mugs"
              className="cat-link cursor-pointer"
            >
              Mugs
            </a>
            <a
              href="/search?category=Hoddies"
              className="cat-link cursor-pointer"
            >
              Hoodies
            </a>
          </div>
        </div>
        <div className="w-9/12 px-12">
          <ProductFeed category={category} />
        </div>
        <div className="w-2/12 max-h-96 overflow-y-auto overflow-x-hidden">
          <p className="text-zinc-700 p-1">Filters</p>
          <hr className="my-4" />
          <div className=" w-ull" >
              <p
                onClick={() => settoggleDropdownPrice((prev) => !prev)}
                className="w-full text-zinc-600 p-2 my-2  text-xl border border-zinc-950 rounded-lg bg-slate-50"
              >
                Price
              </p>
              {toogleDropdownPrice && (
                <div className="w-full flex gap-1 flex-col">
                  <div className="flex p-2 bg-slate-100 rounded-md gap-4">
                    <input type="radio" />
                    <p className="text-zinc-600">Less than ₹500</p>
                  </div>
                  <div className="flex p-2 bg-slate-100 rounded-md gap-4">
                    <input type="radio" />
                    <p className="text-zinc-600">₹500 - ₹1000</p>
                  </div>
                  <div className="flex p-2 bg-slate-100 rounded-md gap-4">
                    <input type="radio" />
                    <p className="text-zinc-600">₹1000 - ₹1500</p>
                  </div>
                  <div className="flex p-2 bg-slate-100 rounded-md gap-4">
                    <input type="radio" />
                    <p className="text-zinc-600">₹1500 - ₹2000</p>
                  </div>
                  <div className="flex p-2 bg-slate-100 rounded-md gap-4">
                    <input type="radio" />
                    <p className="text-zinc-600">More than ₹2000</p>
                  </div>
                </div>
              )}
              <p
                onClick={() => settoggleDropdownColour((prev) => !prev)}
                className="w-full text-zinc-600 p-2 my-2  text-xl border border-zinc-950 rounded-lg bg-slate-50"
              >
                Colour
              </p>
              {toogleDropdownColour && (
                <div className="w-full flex gap-1 flex-col">
                  <div className="flex p-2 item-center bg-slate-100 text-zinc-200 rounded-md gap-4">
                    <input className="" type="radio" />
                    <div className=" w-6 h-6 bg-black rounded-full ring-2 ring-zinc-950"></div>
                    <p className="text-zinc-600">Black</p>
                  </div>
                  <div className="flex p-2 item-center bg-slate-100 text-zinc-200 rounded-md gap-4">
                    <input className="" type="radio" />
                    <div className=" w-6 h-6 bg-white rounded-full ring-2 ring-zinc-950"></div>
                    <p className="text-zinc-600">White</p>
                  </div>
                  <div className="flex p-2 item-center bg-slate-100 text-zinc-200 rounded-md gap-4">
                    <input className="" type="radio" />
                    <div className=" w-6 h-6 bg-red-600 rounded-full ring-2 ring-zinc-950"></div>
                    <p className="text-zinc-600">Red</p>
                  </div>
                  <div className="flex p-2 item-center bg-slate-100 text-zinc-200 rounded-md gap-4">
                    <input className="" type="radio" />
                    <div className=" w-6 h-6 bg-pink-500 rounded-full ring-2 ring-zinc-950"></div>
                    <p className="text-zinc-600">Pink</p>
                  </div>
                  <div className="flex p-2 item-center bg-slate-100 text-zinc-200 rounded-md gap-4">
                    <input className="" type="radio" />
                    <div className=" w-6 h-6 bg-purple-600 rounded-full ring-2 ring-zinc-950"></div>
                    <p className="text-zinc-600">Purple</p>
                  </div>
                  <div className="flex p-2 item-center bg-slate-100 text-zinc-200 rounded-md gap-4">
                    <input className="" type="radio" />
                    <div className=" w-6 h-6 bg-blue-600 rounded-full ring-2 ring-zinc-950"></div>
                    <p className="text-zinc-600">Blue</p>
                  </div>
                  <div className="flex p-2 item-center bg-slate-100 text-zinc-200 rounded-md gap-4">
                    <input className="" type="radio" />
                    <div className=" w-6 h-6 bg-green-400 rounded-full ring-2 ring-zinc-950"></div>
                    <p className="text-zinc-600">Green</p>
                  </div>
                  <div className="flex p-2 item-center bg-slate-100 text-zinc-200 rounded-md gap-4">
                    <input className="" type="radio" />
                    <div className=" w-6 h-6 bg-yellow-400 rounded-full ring-2 ring-zinc-950"></div>
                    <p className="text-zinc-600">Yellow</p>
                  </div>
                  <div className="flex p-2 item-center bg-slate-100 text-zinc-200 rounded-md gap-4">
                    <input className="" type="radio" />
                    <div className=" w-6 h-6 bg-orange-100 rounded-full ring-2 ring-zinc-950"></div>
                    <p className="text-zinc-600">Sand</p>
                  </div>
                  <div className="flex p-2 item-center bg-slate-100 text-zinc-200 rounded-md gap-4">
                    <input className="" type="radio" />
                    <div className=" w-6 h-6 bg-blue-300 rounded-full ring-2 ring-zinc-950"></div>
                    <p className="text-zinc-600">Powder Blue</p>
                  </div>
                </div>
              )}
              <p
                onClick={() => settoggleDropdownSize((prev) => !prev)}
                className="w-full text-zinc-600 p-2 my-2  text-xl border border-zinc-950 rounded-lg bg-slate-50"
              >
                Price
              </p>
              {toogleDropdownSize && (
                <div className="w-full flex gap-1 flex-col">
                  <div className="flex p-2 bg-slate-100 rounded-md gap-4">
                    <input type="radio" />
                    <p className="text-zinc-600">XS</p>
                  </div>
                  <div className="flex p-2 bg-slate-100 rounded-md gap-4">
                    <input type="radio" />
                    <p className="text-zinc-600">S</p>
                  </div>
                  <div className="flex p-2 bg-slate-100 rounded-md gap-4">
                    <input type="radio" />
                    <p className="text-zinc-600">M</p>
                  </div>
                  <div className="flex p-2 bg-slate-100 rounded-md gap-4">
                    <input type="radio" />
                    <p className="text-zinc-600">L</p>
                  </div>
                  <div className="flex p-2 bg-slate-100 rounded-md gap-4">
                    <input type="radio" />
                    <p className="text-zinc-600">XL</p>
                  </div>
                  <div className="flex p-2 bg-slate-100 rounded-md gap-4">
                    <input type="radio" />
                    <p className="text-zinc-600">XXL</p>
                  </div>
                  <div className="flex p-2 bg-slate-100 rounded-md gap-4">
                    <input type="radio" />
                    <p className="text-zinc-600">XXXL</p>
                  </div>
                </div>
              )}
              </div>
        </div>
      </div>
    </section>
  );
};

export default Search;
