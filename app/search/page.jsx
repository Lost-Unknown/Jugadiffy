"use client";
import React from "react";
import ProductFeed from "@components/ProductFeed";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import {CheckboxGroup, Checkbox} from "@nextui-org/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

const Search = () => {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const product = searchParams.get("product");

  return (
    <section>
      {/* Mobile Search */}
      <div className="md:hidden flex flex-col gap-2 justify-center items-center">
        <Dropdown className="w-full">
          <DropdownTrigger>
            <Button variant="bordered" className="w-full">
              Category
            </Button>
          </DropdownTrigger>
          <DropdownMenu className=" w-full">
            <DropdownItem className="w-full">
              <Link
                href={"/search?category=all"}
                className="cat-link cursor-pointer w-full"
              >
                All
              </Link>
            </DropdownItem>
            <DropdownItem className="w-full">
              <Link
                href={"/search?category=Men"}
                className="cat-link cursor-pointer w-full"
              >
                Men
              </Link>
            </DropdownItem>
            <DropdownItem className="w-full">
              <Link
                href="/search?category=Women"
                className="cat-link cursor-pointer w-full"
              >
                Women
              </Link>
            </DropdownItem>
            <DropdownItem className="w-full">
              <Link
                href="/search?category=Kids"
                className="cat-link cursor-pointer w-full"
              >
                Kids
              </Link>
            </DropdownItem>
            <DropdownItem className="w-full">
              <Link
                href="/search?category=Mugs"
                className="cat-link cursor-pointer w-full"
              >
                Mugs
              </Link>
            </DropdownItem>
            <DropdownItem className="w-full">
              <Link
                href="/search?category=Hoddies"
                className="cat-link cursor-pointer w-full"
              >
                Hoodies
              </Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <Dropdown className="w-full">
          <DropdownTrigger>
            <Button variant="bordered" className="w-full">
              Filter
            </Button>
          </DropdownTrigger>
          <DropdownMenu className=" w-full" closeOnSelect={false}>
            <DropdownItem>
            <CheckboxGroup>
              <Dropdown>
                <DropdownTrigger>
                  <Button variant="bordered" className="w-full">Price</Button>
                </DropdownTrigger>
                <DropdownMenu closeOnSelect={false}>
                  <DropdownItem>
                    <Checkbox value="1">Less Than ₹500</Checkbox>
                  </DropdownItem>
                  <DropdownItem>
                    <Checkbox value="2">₹500 - ₹1000</Checkbox>
                  </DropdownItem>
                  <DropdownItem>
                    <Checkbox value="3">₹1000 - ₹1500</Checkbox>
                  </DropdownItem>
                  <DropdownItem>
                    <Checkbox value="4">₹1500 - ₹2000</Checkbox>
                  </DropdownItem>
                  <DropdownItem>
                    <Checkbox value="5">₹More than ₹2000</Checkbox>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </CheckboxGroup>
            </DropdownItem>

            <DropdownItem>
            <CheckboxGroup>
              <Dropdown>
                <DropdownTrigger>
                  <Button variant="bordered" className="w-full">Colour</Button>
                </DropdownTrigger>
                <DropdownMenu closeOnSelect={false}>
                  <DropdownItem>
                    <Checkbox value="Black">Black</Checkbox>
                  </DropdownItem>
                  <DropdownItem>
                    <Checkbox value="White">White</Checkbox>
                  </DropdownItem>
                  <DropdownItem>
                    <Checkbox value="Red">Red</Checkbox>
                  </DropdownItem>
                  <DropdownItem>
                    <Checkbox value="Pink">Pink</Checkbox>
                  </DropdownItem>
                  <DropdownItem>
                    <Checkbox value="Purple">Purple</Checkbox>
                  </DropdownItem>
                  <DropdownItem>
                    <Checkbox value="Blue">Blue</Checkbox>
                  </DropdownItem>
                  <DropdownItem>
                    <Checkbox value="Green">Green</Checkbox>
                  </DropdownItem>
                  <DropdownItem>
                    <Checkbox value="Yellow">Yellow</Checkbox>
                  </DropdownItem>
                  <DropdownItem>
                    <Checkbox value="Sand">Sand</Checkbox>
                  </DropdownItem>
                  <DropdownItem>
                    <Checkbox value="Powder Blue">Powder Blue</Checkbox>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </CheckboxGroup>
            </DropdownItem>

            <DropdownItem>
            <CheckboxGroup>
              <Dropdown>
                <DropdownTrigger>
                  <Button variant="bordered" className="w-full">Size</Button>
                </DropdownTrigger>
                <DropdownMenu closeOnSelect={false}>
                  <DropdownItem>
                    <Checkbox value="S">S</Checkbox>
                  </DropdownItem>
                  <DropdownItem>
                    <Checkbox value="M">M</Checkbox>
                  </DropdownItem>
                  <DropdownItem>
                    <Checkbox value="L">L</Checkbox>
                  </DropdownItem>
                  <DropdownItem>
                    <Checkbox value="XL">XL</Checkbox>
                  </DropdownItem>
                  <DropdownItem>
                    <Checkbox value="XXL">XXL</Checkbox>
                  </DropdownItem>
                  <DropdownItem>
                    <Checkbox value="XXXL">XXXL</Checkbox>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </CheckboxGroup>
            </DropdownItem>
            </DropdownMenu>
            </Dropdown>
        <ProductFeed category={category} product={product} />
      </div>
      {/* Desktop Search */}
      <div className="md:flex hidden w-full">
        <div className=" w-1/12">
          <p className="text-zinc-700 p-1">Collection</p>
          <div className="flex flex-col">
            <Link href="/search?category=all" className="cat-link cursor-pointer">
              All
            </Link>
            <Link href="/search?category=Men" className="cat-link cursor-pointer">
              Men
            </Link>
            <Link
              href="/search?category=Women"
              className="cat-link cursor-pointer"
            >
              Women
            </Link>
            <Link href="/search?category=Kids" className="cat-link cursor-pointer">
              Kids
            </Link>
            <Link href="/search?category=Mugs" className="cat-link cursor-pointer">
              Mugs
            </Link>
            <Link
              href="/search?category=Hoddies"
              className="cat-link cursor-pointer"
            >
              Hoodies
            </Link>
          </div>
        </div>
        <div className="w-9/12 px-12">
          <ProductFeed category={category} product={product} />
        </div>
        <div className="w-2/12 max-h-96 overflow-y-auto overflow-x-hidden">
          <p className="text-zinc-500">Filter</p>
          <div className="py-2 flex flex-col gap-2">
            <CheckboxGroup>
              <Dropdown>
                <DropdownTrigger>
                  <Button variant="bordered">Price</Button>
                </DropdownTrigger>
                <DropdownMenu closeOnSelect={false}>
                  <DropdownItem>
                    <Checkbox value="1">Less Than ₹500</Checkbox>
                  </DropdownItem>
                  <DropdownItem>
                    <Checkbox value="2">₹500 - ₹1000</Checkbox>
                  </DropdownItem>
                  <DropdownItem>
                    <Checkbox value="3">₹1000 - ₹1500</Checkbox>
                  </DropdownItem>
                  <DropdownItem>
                    <Checkbox value="4">₹1500 - ₹2000</Checkbox>
                  </DropdownItem>
                  <DropdownItem>
                    <Checkbox value="5">₹More than ₹2000</Checkbox>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </CheckboxGroup>

            <CheckboxGroup>
              <Dropdown>
                <DropdownTrigger>
                  <Button variant="bordered">Colour</Button>
                </DropdownTrigger>
                <DropdownMenu closeOnSelect={false}>
                  <DropdownItem>
                    <Checkbox value="Black">Black</Checkbox>
                  </DropdownItem>
                  <DropdownItem>
                    <Checkbox value="White">White</Checkbox>
                  </DropdownItem>
                  <DropdownItem>
                    <Checkbox value="Red">Red</Checkbox>
                  </DropdownItem>
                  <DropdownItem>
                    <Checkbox value="Pink">Pink</Checkbox>
                  </DropdownItem>
                  <DropdownItem>
                    <Checkbox value="Purple">Purple</Checkbox>
                  </DropdownItem>
                  <DropdownItem>
                    <Checkbox value="Blue">Blue</Checkbox>
                  </DropdownItem>
                  <DropdownItem>
                    <Checkbox value="Green">Green</Checkbox>
                  </DropdownItem>
                  <DropdownItem>
                    <Checkbox value="Yellow">Yellow</Checkbox>
                  </DropdownItem>
                  <DropdownItem>
                    <Checkbox value="Sand">Sand</Checkbox>
                  </DropdownItem>
                  <DropdownItem>
                    <Checkbox value="Powder Blue">Powder Blue</Checkbox>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </CheckboxGroup>

            <CheckboxGroup>
              <Dropdown>
                <DropdownTrigger>
                  <Button variant="bordered">Size</Button>
                </DropdownTrigger>
                <DropdownMenu closeOnSelect={false}>
                  <DropdownItem>
                    <Checkbox value="S">S</Checkbox>
                  </DropdownItem>
                  <DropdownItem>
                    <Checkbox value="M">M</Checkbox>
                  </DropdownItem>
                  <DropdownItem>
                    <Checkbox value="L">L</Checkbox>
                  </DropdownItem>
                  <DropdownItem>
                    <Checkbox value="XL">XL</Checkbox>
                  </DropdownItem>
                  <DropdownItem>
                    <Checkbox value="XXL">XXL</Checkbox>
                  </DropdownItem>
                  <DropdownItem>
                    <Checkbox value="XXXL">XXXL</Checkbox>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </CheckboxGroup>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search;
