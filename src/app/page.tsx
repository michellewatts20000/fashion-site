"use client";

import Image from "next/image";
import BestGrid from "./components/BestGrid";
import Button from "./components/Button";
import SectionHeading from "./components/SectionHeading";
import Designer from "./components/Designer";

import localFont from "next/font/local";
const myFont = localFont({
  src: "/ui/Elephant-Regular.woff2",
});

import allProducts from "@/app/data/product.js";

const { products, products2, products3 } = allProducts;

export default function Home() {
  return (
    <main className="max-w-[1920px] mx-auto">
      <section className="bg-limeGreen w-full hero relative">
        <nav className="md:top-[54px] md:absolute w-full md:p-0 p-[54px]">
          <div className="flex w-full items-center justify-between md:px-[175px]">
            <div className={`${myFont.className} text-40 text-darkGreen`}>
              <a href="">Rivo</a>
            </div>
            <div className="ml-40 md:block hidden">
              <ul className="flex gap-10 nav-items">
                <li>Home</li>
                <li>Shop</li>
                <li>Features</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="flex items-center justify-center gap-10">
              <a href="">
                <Image
                  src={"/shopping-icon.png"}
                  width={32}
                  height={32}
                  alt={"shopping icon"}
                  className="mt-2"
                  priority
                  style={{ width: 32, height: 32 }}
                />
              </a>
              <button className="hover:bg-white  w-[142px] h-[52px] outline-darkGreen border-2 border-darkGreen text-20 uppercase font-poppins font-medium">
                Login
              </button>
            </div>
          </div>
        </nav>
        <div className="px-10 flex md:flex-row flex-col w-full lg:px-[175px] md:px-[100px] gap-4 md:min-h-[1100px] justify-center items-center">
          <div className="md:w-1/2">
            <h1 className="text-clampHeading text-darkGreen font-rufina mb-6 font-bold leading-normal">
              Discover and <br /> Find Your Own Fashion!
            </h1>
            <p className="max-w-[565px] subheading">
              Explore our curated collection of stylish clothing and accessories
              tailored to your unique taste.
            </p>
            <Button
              text="Explore now"
              solid={true}
              dimensions={"w-[258px] h-[74px]"}
              dropShadow={true}
            />
          </div>
          <div className="md:w-1/2  my-20 mt-40">
            <Image
              src={"/hero.png"}
              width={570}
              height={717}
              alt={"hero"}
              priority={true}
              className="ml-auto"
            />
          </div>
        </div>
      </section>
      <section className="w-full max-w-[1377px] mx-auto">
        <SectionHeading
          title="Best selling"
          description="Get in on the trend with our curated selection of best-selling styles."
        />
        <div className="flex items-start justify-center flex-wrap gap-10">
          {products.map((p) => (
            <BestGrid
              key={p.id}
              image={p.image}
              productTitle={p.productTitle}
              stars={p.stars}
              price={p.price}
              width={430}
              height={566}
            />
          ))}
        </div>
        <div className="mx-auto w-full text-center flex flex-col items-center">
          <Button
            text="See all"
            solid={false}
            dimensions="w-[224px] h-[65px]"
            dropShadow={false}
          />
        </div>
      </section>
      <section className="w-full max-w-[1377px] mx-auto">
        <SectionHeading
          title="Our Products"
          description="Get in on the trend with our curated selection of best-selling styles."
        />
        <div className="flex items-start justify-center gap-6 flex-wrap">
          {products2.map((p) => (
            <BestGrid
              key={p.id}
              image={p.image}
              productTitle={p.productTitle}
              stars={p.stars}
              price={p.price}
              width={318}
              height={378}
            />
          ))}
        </div>
      </section>
      <section className="max-w-[1377px] mx-auto py-20">
        <div className="bg-limeGreen w-full md:h-[596px] overflow-hidden relative">
          <Image
            src={"/breakout.png"}
            width={482}
            height={596}
            alt={"breakout"}
            className="md:absolute bottom-0 left-20"
          />
          <div className="flex items-center justify-end h-full p-20 md:p-0">
            <div className="md:w-1/2">
              <div className="mb-10">
                <h1 className="text-46 text-darkGreen font-roboto font-semibold mb-4">
                  Exclusive offer
                </h1>
                <p className="leading-custom md:max-w-[590px]">
                  Unlock the ultimate style upgrade with our exclusive offer
                  Enjoy savings of up to 40% off on our latest New Arrivals
                </p>
              </div>
              <div className="flex gap-4">
                <div className="bg-white w-[100px] h-[100px] flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-darkGreen leading-tight text-32">06</p>
                    <p className="text-darkGreen text-16 font-light">Days</p>
                  </div>
                </div>
                <div className="bg-white w-[100px] h-[100px] flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-darkGreen leading-tight text-32">18</p>
                    <p className="text-darkGreen text-16 font-light">Hours</p>
                  </div>
                </div>
                <div className="bg-white w-[100px] h-[100px] flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-darkGreen leading-tight text-32">48</p>
                    <p className="text-darkGreen text-16 font-light">Minutes</p>
                  </div>
                </div>
              </div>
              <Button
                text="Buy now"
                solid={true}
                dimensions={"w-[235px] h-[74px]"}
                dropShadow={false}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-[1377px] mx-auto pb-10 px-10 md:px-0">
        <SectionHeading
          title="Designer Clothes For You"
          description="Immerse yourself in the world of luxury fashion with our meticulously crafted designer clothes!"
        />
        <div className="flex gap-10 flex-wrap items-center justify-center">
          {products3.map((p) => (
            <Designer
              key={p.id}
              image={p.image}
              heading={p.heading}
              description={p.description}
              width={430}
              height={566}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
