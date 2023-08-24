"use client";
import React from "react";
import ProductFeed from "@components/ProductFeed";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { CheckboxGroup, Checkbox } from "@nextui-org/react";
import { useState } from "react";
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
  const [priceFilter, setPriceFilter] = useState([]);
  const [colorFilter, setColorFilter] = useState([]);
  const [sizeFilter, setSizeFilter] = useState([]);
  return (
    <section className="px-2">
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
                    <Button variant="bordered" className="w-full">
                      Price
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu closeOnSelect={false}>
                    <DropdownItem>
                      <Checkbox
                        value="0"
                        onChange={(e) => {
                          if (e.target.checked) {
                            setPriceFilter((prevFilters) => [
                              ...prevFilters,
                              e.target.value,
                            ]);
                          } else {
                            setPriceFilter((prevFilters) =>
                              prevFilters.filter(
                                (color) => color !== e.target.value
                              )
                            );
                          }
                        }}
                      >
                        Less Than ₹500
                      </Checkbox>
                    </DropdownItem>
                    <DropdownItem>
                      <Checkbox
                        value="1"
                        onChange={(e) => {
                          if (e.target.checked) {
                            setPriceFilter((prevFilters) => [
                              ...prevFilters,
                              e.target.value,
                            ]);
                          } else {
                            setPriceFilter((prevFilters) =>
                              prevFilters.filter(
                                (color) => color !== e.target.value
                              )
                            );
                          }
                        }}
                      >
                        ₹500 - ₹1000
                      </Checkbox>
                    </DropdownItem>
                    <DropdownItem>
                      <Checkbox
                        value="2"
                        onChange={(e) => {
                          if (e.target.checked) {
                            setPriceFilter((prevFilters) => [
                              ...prevFilters,
                              e.target.value,
                            ]);
                          } else {
                            setPriceFilter((prevFilters) =>
                              prevFilters.filter(
                                (color) => color !== e.target.value
                              )
                            );
                          }
                        }}
                      >
                        ₹1000 - ₹1500
                      </Checkbox>
                    </DropdownItem>
                    <DropdownItem>
                      <Checkbox
                        value="3"
                        onChange={(e) => {
                          if (e.target.checked) {
                            setPriceFilter((prevFilters) => [
                              ...prevFilters,
                              e.target.value,
                            ]);
                          } else {
                            setPriceFilter((prevFilters) =>
                              prevFilters.filter(
                                (color) => color !== e.target.value
                              )
                            );
                          }
                        }}
                      >
                        ₹1500 - ₹2000
                      </Checkbox>
                    </DropdownItem>
                    <DropdownItem>
                      <Checkbox
                        value="4"
                        onChange={(e) => {
                          if (e.target.checked) {
                            setPriceFilter((prevFilters) => [
                              ...prevFilters,
                              e.target.value,
                            ]);
                          } else {
                            setPriceFilter((prevFilters) =>
                              prevFilters.filter(
                                (color) => color !== e.target.value
                              )
                            );
                          }
                        }}
                      >
                        ₹More than ₹2000
                      </Checkbox>
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </CheckboxGroup>
            </DropdownItem>

            <DropdownItem>
              <CheckboxGroup>
                <Dropdown>
                  <DropdownTrigger>
                    <Button variant="bordered" className="w-full">
                      Colour
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu closeOnSelect={false}>
                    <DropdownItem>
                      <Checkbox
                        value="Black"
                        onChange={(e) => {
                          if (e.target.checked) {
                            setColorFilter((prevFilters) => [
                              ...prevFilters,
                              e.target.value,
                            ]);
                          } else {
                            setColorFilter((prevFilters) =>
                              prevFilters.filter(
                                (color) => color !== e.target.value
                              )
                            );
                          }
                        }}
                      >
                        Black
                      </Checkbox>
                    </DropdownItem>
                    <DropdownItem>
                      <Checkbox
                        value="White"
                        onChange={(e) => {
                          if (e.target.checked) {
                            setColorFilter((prevFilters) => [
                              ...prevFilters,
                              e.target.value,
                            ]);
                          } else {
                            setColorFilter((prevFilters) =>
                              prevFilters.filter(
                                (color) => color !== e.target.value
                              )
                            );
                          }
                        }}
                      >
                        White
                      </Checkbox>
                    </DropdownItem>
                    <DropdownItem>
                      <Checkbox
                        value="Red"
                        onChange={(e) => {
                          if (e.target.checked) {
                            setColorFilter((prevFilters) => [
                              ...prevFilters,
                              e.target.value,
                            ]);
                          } else {
                            setColorFilter((prevFilters) =>
                              prevFilters.filter(
                                (color) => color !== e.target.value
                              )
                            );
                          }
                        }}
                      >
                        Red
                      </Checkbox>
                    </DropdownItem>
                    <DropdownItem>
                      <Checkbox
                        value="Pink"
                        onChange={(e) => {
                          if (e.target.checked) {
                            setColorFilter((prevFilters) => [
                              ...prevFilters,
                              e.target.value,
                            ]);
                          } else {
                            setColorFilter((prevFilters) =>
                              prevFilters.filter(
                                (color) => color !== e.target.value
                              )
                            );
                          }
                        }}
                      >
                        Pink
                      </Checkbox>
                    </DropdownItem>
                    <DropdownItem>
                      <Checkbox
                        value="Purple"
                        onChange={(e) => {
                          if (e.target.checked) {
                            setColorFilter((prevFilters) => [
                              ...prevFilters,
                              e.target.value,
                            ]);
                          } else {
                            setColorFilter((prevFilters) =>
                              prevFilters.filter(
                                (color) => color !== e.target.value
                              )
                            );
                          }
                        }}
                      >
                        Purple
                      </Checkbox>
                    </DropdownItem>
                    <DropdownItem>
                      <Checkbox
                        value="Blue"
                        onChange={(e) => {
                          if (e.target.checked) {
                            setColorFilter((prevFilters) => [
                              ...prevFilters,
                              e.target.value,
                            ]);
                          } else {
                            setColorFilter((prevFilters) =>
                              prevFilters.filter(
                                (color) => color !== e.target.value
                              )
                            );
                          }
                        }}
                      >
                        Blue
                      </Checkbox>
                    </DropdownItem>
                    <DropdownItem>
                      <Checkbox
                        value="Green"
                        onChange={(e) => {
                          if (e.target.checked) {
                            setColorFilter((prevFilters) => [
                              ...prevFilters,
                              e.target.value,
                            ]);
                          } else {
                            setColorFilter((prevFilters) =>
                              prevFilters.filter(
                                (color) => color !== e.target.value
                              )
                            );
                          }
                        }}
                      >
                        Green
                      </Checkbox>
                    </DropdownItem>
                    <DropdownItem>
                      <Checkbox
                        value="Yellow"
                        onChange={(e) => {
                          if (e.target.checked) {
                            setColorFilter((prevFilters) => [
                              ...prevFilters,
                              e.target.value,
                            ]);
                          } else {
                            setColorFilter((prevFilters) =>
                              prevFilters.filter(
                                (color) => color !== e.target.value
                              )
                            );
                          }
                        }}
                      >
                        Yellow
                      </Checkbox>
                    </DropdownItem>
                    <DropdownItem>
                      <Checkbox
                        value="Sand"
                        onChange={(e) => {
                          if (e.target.checked) {
                            setColorFilter((prevFilters) => [
                              ...prevFilters,
                              e.target.value,
                            ]);
                          } else {
                            setColorFilter((prevFilters) =>
                              prevFilters.filter(
                                (color) => color !== e.target.value
                              )
                            );
                          }
                        }}
                      >
                        Sand
                      </Checkbox>
                    </DropdownItem>
                    <DropdownItem>
                      <Checkbox
                        value="Powder Blue"
                        onChange={(e) => {
                          if (e.target.checked) {
                            setColorFilter((prevFilters) => [
                              ...prevFilters,
                              e.target.value,
                            ]);
                          } else {
                            setColorFilter((prevFilters) =>
                              prevFilters.filter(
                                (color) => color !== e.target.value
                              )
                            );
                          }
                        }}
                      >
                        Powder Blue
                      </Checkbox>
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </CheckboxGroup>
            </DropdownItem>

            <DropdownItem>
              <CheckboxGroup>
                <Dropdown>
                  <DropdownTrigger>
                    <Button variant="bordered" className="w-full">
                      Size
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu closeOnSelect={false}>
                    <DropdownItem>
                      <Checkbox
                        value="S"
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSizeFilter((prevFilters) => [
                              ...prevFilters,
                              e.target.value,
                            ]);
                          } else {
                            setSizeFilter((prevFilters) =>
                              prevFilters.filter(
                                (size) => size !== e.target.value
                              )
                            );
                          }
                        }}
                      >
                        S
                      </Checkbox>
                    </DropdownItem>
                    <DropdownItem>
                      <Checkbox
                        value="M"
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSizeFilter((prevFilters) => [
                              ...prevFilters,
                              e.target.value,
                            ]);
                          } else {
                            setSizeFilter((prevFilters) =>
                              prevFilters.filter(
                                (size) => size !== e.target.value
                              )
                            );
                          }
                        }}
                      >
                        M
                      </Checkbox>
                    </DropdownItem>
                    <DropdownItem>
                      <Checkbox
                        value="L"
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSizeFilter((prevFilters) => [
                              ...prevFilters,
                              e.target.value,
                            ]);
                          } else {
                            setSizeFilter((prevFilters) =>
                              prevFilters.filter(
                                (size) => size !== e.target.value
                              )
                            );
                          }
                        }}
                      >
                        L
                      </Checkbox>
                    </DropdownItem>
                    <DropdownItem>
                      <Checkbox
                        value="XL"
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSizeFilter((prevFilters) => [
                              ...prevFilters,
                              e.target.value,
                            ]);
                          } else {
                            setSizeFilter((prevFilters) =>
                              prevFilters.filter(
                                (size) => size !== e.target.value
                              )
                            );
                          }
                        }}
                      >
                        XL
                      </Checkbox>
                    </DropdownItem>
                    <DropdownItem>
                      <Checkbox
                        value="XXL"
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSizeFilter((prevFilters) => [
                              ...prevFilters,
                              e.target.value,
                            ]);
                          } else {
                            setSizeFilter((prevFilters) =>
                              prevFilters.filter(
                                (size) => size !== e.target.value
                              )
                            );
                          }
                        }}
                      >
                        XXL
                      </Checkbox>
                    </DropdownItem>
                    <DropdownItem>
                      <Checkbox
                        value="XXXL"
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSizeFilter((prevFilters) => [
                              ...prevFilters,
                              e.target.value,
                            ]);
                          } else {
                            setSizeFilter((prevFilters) =>
                              prevFilters.filter(
                                (size) => size !== e.target.value
                              )
                            );
                          }
                        }}
                      >
                        XXXL
                      </Checkbox>
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </CheckboxGroup>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <ProductFeed
          category={category}
          product={product}
          priceFilter={priceFilter}
          colorFilter={colorFilter}
          sizeFilter={sizeFilter}
        />
      </div>
      {/* Desktop Search */}
      <div className="md:flex hidden w-full">
        <div className=" w-1/12">
          <p className="text-zinc-700 p-1">Collection</p>
          <div className="flex flex-col">
            <Link
              href="/search?category=all"
              className="cat-link cursor-pointer"
            >
              All
            </Link>
            <Link
              href="/search?category=Men"
              className="cat-link cursor-pointer"
            >
              Men
            </Link>
            <Link
              href="/search?category=Women"
              className="cat-link cursor-pointer"
            >
              Women
            </Link>
            <Link
              href="/search?category=Kids"
              className="cat-link cursor-pointer"
            >
              Kids
            </Link>
            <Link
              href="/search?category=Mugs"
              className="cat-link cursor-pointer"
            >
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
          <ProductFeed
            category={category}
            product={product}
            priceFilter={priceFilter}
            colorFilter={colorFilter}
            sizeFilter={sizeFilter}
          />
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
                      <Checkbox
                        value="1"
                        onChange={(e) => {
                          if (e.target.checked) {
                            setPriceFilter((prevFilters) => [
                              ...prevFilters,
                              e.target.value,
                            ]);
                          } else {
                            setPriceFilter((prevFilters) =>
                              prevFilters.filter(
                                (price) => price !== e.target.value
                              )
                            );
                          }
                        }}
                      >
                        Less Than ₹500
                      </Checkbox>
                    </DropdownItem>
                    <DropdownItem>
                      <Checkbox
                        value="2"
                        onChange={(e) => {
                          if (e.target.checked) {
                            setPriceFilter((prevFilters) => [
                              ...prevFilters,
                              e.target.value,
                            ]);
                          } else {
                            setPriceFilter((prevFilters) =>
                              prevFilters.filter(
                                (price) => price !== e.target.value
                              )
                            );
                          }
                        }}
                      >
                        ₹500 - ₹1000
                      </Checkbox>
                    </DropdownItem>
                    <DropdownItem>
                      <Checkbox
                        value="3"
                        onChange={(e) => {
                          if (e.target.checked) {
                            setPriceFilter((prevFilters) => [
                              ...prevFilters,
                              e.target.value,
                            ]);
                          } else {
                            setPriceFilter((prevFilters) =>
                              prevFilters.filter(
                                (price) => price !== e.target.value
                              )
                            );
                          }
                        }}
                      >
                        ₹1000 - ₹1500
                      </Checkbox>
                    </DropdownItem>
                    <DropdownItem>
                      <Checkbox
                        value="4"
                        onChange={(e) => {
                          if (e.target.checked) {
                            setPriceFilter((prevFilters) => [
                              ...prevFilters,
                              e.target.value,
                            ]);
                          } else {
                            setPriceFilter((prevFilters) =>
                              prevFilters.filter(
                                (price) => price !== e.target.value
                              )
                            );
                          }
                        }}
                      >
                        ₹1500 - ₹2000
                      </Checkbox>
                    </DropdownItem>
                    <DropdownItem>
                      <Checkbox
                        value="5"
                        onChange={(e) => {
                          if (e.target.checked) {
                            setPriceFilter((prevFilters) => [
                              ...prevFilters,
                              e.target.value,
                            ]);
                          } else {
                            setPriceFilter((prevFilters) =>
                              prevFilters.filter(
                                (price) => price !== e.target.value
                              )
                            );
                          }
                        }}
                      >
                        ₹More than ₹2000
                      </Checkbox>
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
                    <Checkbox
                      value="Black"
                      onChange={(e) => {
                        if (e.target.checked) {
                          setColorFilter((prevFilters) => [
                            ...prevFilters,
                            e.target.value,
                          ]);
                        } else {
                          setColorFilter((prevFilters) =>
                            prevFilters.filter(
                              (color) => color !== e.target.value
                            )
                          );
                        }
                      }}
                    >
                      Black
                    </Checkbox>
                  </DropdownItem>
                  <DropdownItem>
                    <Checkbox
                      value="White"
                      onChange={(e) => {
                        if (e.target.checked) {
                          setColorFilter((prevFilters) => [
                            ...prevFilters,
                            e.target.value,
                          ]);
                        } else {
                          setColorFilter((prevFilters) =>
                            prevFilters.filter(
                              (color) => color !== e.target.value
                            )
                          );
                        }
                      }}
                    >
                      White
                    </Checkbox>
                  </DropdownItem>
                  <DropdownItem>
                    <Checkbox
                      value="Red"
                      onChange={(e) => {
                        if (e.target.checked) {
                          setColorFilter((prevFilters) => [
                            ...prevFilters,
                            e.target.value,
                          ]);
                        } else {
                          setColorFilter((prevFilters) =>
                            prevFilters.filter(
                              (color) => color !== e.target.value
                            )
                          );
                        }
                      }}
                    >
                      Red
                    </Checkbox>
                  </DropdownItem>
                  <DropdownItem>
                    <Checkbox
                      value="Pink"
                      onChange={(e) => {
                        if (e.target.checked) {
                          setColorFilter((prevFilters) => [
                            ...prevFilters,
                            e.target.value,
                          ]);
                        } else {
                          setColorFilter((prevFilters) =>
                            prevFilters.filter(
                              (color) => color !== e.target.value
                            )
                          );
                        }
                      }}
                    >
                      Pink
                    </Checkbox>
                  </DropdownItem>
                  <DropdownItem>
                    <Checkbox
                      value="Purple"
                      onChange={(e) => {
                        if (e.target.checked) {
                          setColorFilter((prevFilters) => [
                            ...prevFilters,
                            e.target.value,
                          ]);
                        } else {
                          setColorFilter((prevFilters) =>
                            prevFilters.filter(
                              (color) => color !== e.target.value
                            )
                          );
                        }
                      }}
                    >
                      Purple
                    </Checkbox>
                  </DropdownItem>
                  <DropdownItem>
                    <Checkbox
                      value="Blue"
                      onChange={(e) => {
                        if (e.target.checked) {
                          setColorFilter((prevFilters) => [
                            ...prevFilters,
                            e.target.value,
                          ]);
                        } else {
                          setColorFilter((prevFilters) =>
                            prevFilters.filter(
                              (color) => color !== e.target.value
                            )
                          );
                        }
                      }}
                    >
                      Blue
                    </Checkbox>
                  </DropdownItem>
                  <DropdownItem>
                    <Checkbox
                      value="Green"
                      onChange={(e) => {
                        if (e.target.checked) {
                          setColorFilter((prevFilters) => [
                            ...prevFilters,
                            e.target.value,
                          ]);
                        } else {
                          setColorFilter((prevFilters) =>
                            prevFilters.filter(
                              (color) => color !== e.target.value
                            )
                          );
                        }
                      }}
                    >
                      Green
                    </Checkbox>
                  </DropdownItem>
                  <DropdownItem>
                    <Checkbox
                      value="Yellow"
                      onChange={(e) => {
                        if (e.target.checked) {
                          setColorFilter((prevFilters) => [
                            ...prevFilters,
                            e.target.value,
                          ]);
                        } else {
                          setColorFilter((prevFilters) =>
                            prevFilters.filter(
                              (color) => color !== e.target.value
                            )
                          );
                        }
                      }}
                    >
                      Yellow
                    </Checkbox>
                  </DropdownItem>
                  <DropdownItem>
                    <Checkbox
                      value="Sand"
                      onChange={(e) => {
                        if (e.target.checked) {
                          setColorFilter((prevFilters) => [
                            ...prevFilters,
                            e.target.value,
                          ]);
                        } else {
                          setColorFilter((prevFilters) =>
                            prevFilters.filter(
                              (color) => color !== e.target.value
                            )
                          );
                        }
                      }}
                    >
                      Sand
                    </Checkbox>
                  </DropdownItem>
                  <DropdownItem>
                    <Checkbox
                      value="Powder Blue"
                      onChange={(e) => {
                        if (e.target.checked) {
                          setColorFilter((prevFilters) => [
                            ...prevFilters,
                            e.target.value,
                          ]);
                        } else {
                          setColorFilter((prevFilters) =>
                            prevFilters.filter(
                              (color) => color !== e.target.value
                            )
                          );
                        }
                      }}
                    >
                      Powder Blue
                    </Checkbox>
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
                    <Checkbox
                      value="S"
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSizeFilter((prevFilters) => [
                            ...prevFilters,
                            e.target.value,
                          ]);
                        } else {
                          setSizeFilter((prevFilters) =>
                            prevFilters.filter(
                              (size) => size !== e.target.value
                            )
                          );
                        }
                      }}
                    >
                      S
                    </Checkbox>
                  </DropdownItem>
                  <DropdownItem>
                    <Checkbox
                      value="M"
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSizeFilter((prevFilters) => [
                            ...prevFilters,
                            e.target.value,
                          ]);
                        } else {
                          setSizeFilter((prevFilters) =>
                            prevFilters.filter(
                              (size) => size !== e.target.value
                            )
                          );
                        }
                      }}
                    >
                      M
                    </Checkbox>
                  </DropdownItem>
                  <DropdownItem>
                    <Checkbox
                      value="L"
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSizeFilter((prevFilters) => [
                            ...prevFilters,
                            e.target.value,
                          ]);
                        } else {
                          setSizeFilter((prevFilters) =>
                            prevFilters.filter(
                              (size) => size !== e.target.value
                            )
                          );
                        }
                      }}
                    >
                      L
                    </Checkbox>
                  </DropdownItem>
                  <DropdownItem>
                    <Checkbox
                      value="XL"
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSizeFilter((prevFilters) => [
                            ...prevFilters,
                            e.target.value,
                          ]);
                        } else {
                          setSizeFilter((prevFilters) =>
                            prevFilters.filter(
                              (size) => size !== e.target.value
                            )
                          );
                        }
                      }}
                    >
                      XL
                    </Checkbox>
                  </DropdownItem>
                  <DropdownItem>
                    <Checkbox
                      value="XXL"
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSizeFilter((prevFilters) => [
                            ...prevFilters,
                            e.target.value,
                          ]);
                        } else {
                          setSizeFilter((prevFilters) =>
                            prevFilters.filter(
                              (size) => size !== e.target.value
                            )
                          );
                        }
                      }}
                    >
                      XXL
                    </Checkbox>
                  </DropdownItem>
                  <DropdownItem>
                    <Checkbox
                      value="XXXL"
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSizeFilter((prevFilters) => [
                            ...prevFilters,
                            e.target.value,
                          ]);
                        } else {
                          setSizeFilter((prevFilters) =>
                            prevFilters.filter(
                              (size) => size !== e.target.value
                            )
                          );
                        }
                      }}
                    >
                      XXXL
                    </Checkbox>
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
