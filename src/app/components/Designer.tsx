import React from "react";
import Image from "next/image";

interface DesignerProps {
  image: string;
  heading: string;
  description: string;
  width: number;
  height: number;
}

const Designer: React.FC<DesignerProps> = ({
  image,
  heading,
  description,
  width,
  height,
}) => {
  return (
    <div className="max-w-[430px] cursor-pointer">
      <div className="overflow-hidden">
        <Image
          src={image}
          width={width}
          height={height}
          alt={"breakout"}
          className="hover:scale-125"
        />
      </div>
      <div className="text-center ">
        <h1 className="text-darkGrey text-30 font-poppins font-medium mt-6 mb-4">
          {heading}
        </h1>
        <p className="leading-custom text-22 text-darkGrey font-normal">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Designer;
