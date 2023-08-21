"use client";
import ProductCard from "@components/ProductCard";
import Image from "next/image";
import Link from "next/link";
import { Carousel, IconButton } from "@material-tailwind/react";
const Home = () => {
  return (
    <section>
      <Carousel
        className=" p-0 m-0"
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-40 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
        prevArrow={({ handlePrev }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handlePrev}
            className="!absolute top-2/4 left-4 -translate-y-2/4"
          >
            <svg
              xmlns="http:   http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </IconButton>
        )}
        nextArrow={({ handleNext }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handleNext}
            className="!absolute top-2/4 !right-4 -translate-y-2/4"
          >
            <svg
              xmlns="http:   http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </IconButton>
        )}
      >
        <Image
          className="w-full h-unit-8xl"
          src="/assets/images/test.avif"
          width={800}
          height={400}
          alt="image1"
        />

        <Image
          className="w-full h-unit-8xl"
          src="/assets/images/test.avif"
          width={800}
          height={400}
          alt="image2"
        />

        <Image
          className="w-full h-unit-8xl"
          src="/assets/images/test.avif"
          width={800}
          height={400}
          alt="image3"
        />

        <Image
          className="w-full h-unit-8xl"
          src="/assets/images/test.avif"
          width={800}
          height={400}
          alt="image4"
        />

        <Image
          className="w-full h-unit-8xl"
          src="/assets/images/test.avif"
          width={800}
          height={400}
          alt="image5"
        />
      </Carousel>
      <div className="flex flex-col mt-6 gap-6 justify-center items-center px-2 sm:px-10 md:px-32">
        <h4 className=" font-inter text-2xl py-4 font-semibold">
          Shop For Men
        </h4>

        <div className="grid  md:grid-cols-6 sm:grid-cols-4 grid-cols-2 gap-1">
          <Link
            href="">
              <Image
                width={1080}
                height={1080}
                src="http://nobero.com/cdn/shop/collections/hoodie.png?v=1689157352 "
              />
              <p className=" w-full text-center font-semibold">
                Hoodies
              </p>
          </Link>

          <Link
            href="">
              <Image
                width={1080}
                height={1080}
                src="http://nobero.com/cdn/shop/files/1m_2.png?v=1689745471"
              />
              <p className="  w-full text-center font-semibold ">
                T-Shirts
              </p>
          </Link>

          <Link
            href=""
           >
              <Image
                width={1080}
                height={1080}
                src="http://nobero.com/cdn/shop/collections/9.jpg?v=1679917418 "
              />
              <p className=" w-full text-center font-semibold">
                Co-Ord Sets
              </p>
          </Link>

          <Link
            href=""
            >
              <Image
                width={1080}
                height={1080}
                src="http://nobero.com/cdn/shop/collections/10.jpg?v=1679917593 "
              />
              <p className=" w-full text-center font-semibold  ">
                Joggers
              </p>
          </Link>

          <Link
            href=""
          >
              <Image
                width={1080}
                height={1080}
                src="http://nobero.com/cdn/shop/collections/8.jpg?v=1679917719 "
              />
              <p className=" w-full text-center font-semibold  ">
                Shorts
              </p>
          </Link>

          <Link
            href=""
           >
              <Image
                width={1080}
                height={1080}
                src="http://nobero.com/cdn/shop/files/fashleasure.png?v=1686034040"
              />
              <p className=" w-full text-center font-semibold  ">
                Fashleisure Edit
              </p>
          </Link>

          <Link
            href=""
           >
              <Image
                width={1080}
                height={1080}
                src="http://nobero.com/cdn/shop/files/texture_edit_3.png?v=1686034146"
              />
              <p className=" w-full text-center font-semibold  ">
                Textured Co-ords
              </p>
          </Link>

          <Link
            href=""
           >
              <Image
                width={1080}
                height={1080}
                src="http://nobero.com/cdn/shop/files/Untitled_design_34c01513-c583-43e5-8e0e-af2a5deb88c3.png?v=1685700930"
              />
              <p className=" w-full text-center font-semibold">
                Oversized Tees
              </p>
          </Link>

          <Link
            href=""
          >
              <Image
                width={1080}
                height={1080}
                src="http://nobero.com/cdn/shop/collections/11_303ebb63-5abc-41db-ba82-468445c8f2d8.jpg?v=1679917779 "
              />
              <p className=" w-full text-center font-semibold">
                Luxury Co-ords
              </p>
          </Link>

          <Link
            href=""
           >
              <Image
                width={1080}
                height={1080}
                src="http://nobero.com/cdn/shop/files/blush_2.png?v=1684928509"
              />
              <p className=" w-full text-center font-semibold">
                Plus Size Tees
              </p>
          </Link>
        </div>
      </div>
      <div className="flex flex-col mt-6 gap-6 justify-center items-center px-2 sm:px-10 md:px-32">
        <h4 className=" font-inter text-2xl py-4 font-semibold">
          Shop For Women
        </h4>

        <div className="grid  md:grid-cols-6 sm:grid-cols-4 grid-cols-2 gap-1">
          <Link
            href="">
              <Image
                width={1080}
                height={1080}
                src="https://nobero.com/cdn/shop/collections/1w.png?v=1689691329"
              />
              <p className=" w-full text-center font-semibold">
                Trendy Tops
              </p>
          </Link>

          <Link
            href="">
              <Image
                width={1080}
                height={1080}
                src="https://nobero.com/cdn/shop/collections/Untitled_design_3_3cdc79b2-d950-40e5-9a35-47a983b79c3f.jpg?v=1679997310"
              />
              <p className="  w-full text-center font-semibold ">
                Co-Ord Sets
              </p>
          </Link>

          <Link
            href=""
           >
              <Image
                width={1080}
                height={1080}
                src="https://nobero.com/cdn/shop/collections/3_7.jpg?v=1681740357"
              />
              <p className=" w-full text-center font-semibold">
                Joggers
              </p>
          </Link>

          <Link
            href=""
            >
              <Image
                width={1080}
                height={1080}
                src="https://nobero.com/cdn/shop/collections/2-5.jpg?v=1679997455"
              />
              <p className=" w-full text-center font-semibold  ">
                Shorts
              </p>
          </Link>

          <Link
            href=""
          >
              <Image
                width={1080}
                height={1080}
                src="https://nobero.com/cdn/shop/collections/elevated_women_copy_1.png?v=1684928059"
              />
              <p className=" w-full text-center font-semibold  ">
                Fashleisure Edit
              </p>
          </Link>

          <Link
            href=""
           >
              <Image
                width={1080}
                height={1080}
                src="https://nobero.com/cdn/shop/collections/1.jpg?v=1679984145"
              />
              <p className=" w-full text-center font-semibold  ">
                3 Tees @999
              </p>
          </Link>

          <Link
            href=""
           >
              <Image
                width={1080}
                height={1080}
                src="https://nobero.com/cdn/shop/files/women.png?v=1686034454"
              />
              <p className=" w-full text-center font-semibold  ">
                Textured Co-ords
              </p>
          </Link>

          <Link
            href=""
           >
              <Image
                width={1080}
                height={1080}
                src="https://nobero.com/cdn/shop/files/5_MConverter.eu.png?v=1684168859"
              />
              <p className=" w-full text-center font-semibold">
                Luxury Co-Ord
              </p>
          </Link>

          <Link
            href=""
          >
              <Image
                width={1080}
                height={1080}
                src="https://nobero.com/cdn/shop/collections/6.jpg?v=1679984162"
              />
              <p className=" w-full text-center font-semibold">
                Textured Collection
              </p>
          </Link>

          <Link
            href=""
           >
              <Image
                width={1080}
                height={1080}
                src="https://nobero.com/cdn/shop/files/plus_size_copy_2.png?v=1684928797"
              />
              <p className=" w-full text-center font-semibold">
                Plus Size Tees
              </p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
