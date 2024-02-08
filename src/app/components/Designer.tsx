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
    <div className="max-w-[430px]">
      <Image src={image} width={width} height={height} alt={"breakout"} />
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
