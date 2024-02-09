import React from "react";
import Image from "next/image";

interface BestGridProps {
  image: string;
  productTitle: string;
  price: string;
  stars: string;
  height: number;
  width: number;
}

const BestGrid: React.FC<BestGridProps> = ({
  image,
  productTitle,
  stars,
  price,
  width,
  height,
}) => {
  return (
    <div className="mb-10 cursor-pointer">
      <div className="overflow-hidden">
        <Image
          src={image}
          width={width}
          height={height}
          alt={image}
          className="hover:scale-125 ease-in duration-300"
          priority
          style={{ width: width, height: height }}
        />
      </div>
      <div className="text-center mt-[40px]">
        <p className="text-darkGrey font-semibold leading-normal">
          {productTitle}
        </p>
        <p className="text-secondaryGrey font-normal">
          <span>{price}</span>
          <span className="inline-block mx-8 font-light">|</span>

          <span>
            {stars}
            <Image
              src={"/star.svg"}
              width={20}
              height={20}
              alt={"best selling image 1"}
              className="mb-1 inline ml-2"
              priority
              style={{ width: 20, height: 20 }}
            />
          </span>
        </p>
      </div>
    </div>
  );
};

export default BestGrid;
