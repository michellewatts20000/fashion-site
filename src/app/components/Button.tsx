import React from "react";
import { useState } from "react";
import Image from "next/image";

interface ButtonProps {
  text: string;
  solid: boolean;
  dimensions: string;
  dropShadow: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text,
  solid,
  dimensions,
  dropShadow,
}) => {
  const [arrowsrc, setArrow] = useState("/arrow.svg");

  let arrowHover = (color: string) => {
    setArrow(color === "greenBg" ? "/arrow-inverse.svg" : "/arrow.svg");
  };

  return (
    <>
      {solid ? (
        <a
          href=""
          target="_blank"
          className={`md:mx-0 mx-auto mt-10 font-poppins  uppercase text-20 font-medium cursor-pointer flex items-center justify-center  hover:before:bg-white relative ${dimensions} ${
            dropShadow ? "drop-shadow-2xl" : ""
          } overflow-hidden bg-darkGreen px-3 text-white  transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-white before:transition-all before:duration-500 hover:text-darkGreen hover:before:left-0 hover:before:w-full`}
          rel="sponsored noopener noreferrer"
        >
          <span className="z-10">{text}</span>
        </a>
      ) : (
        <a
          href=""
          target="_blank"
          className={`md:mx-0 mx-auto font-poppins text-20 font-medium cursor-pointer flex items-center justify-center border-2 border-darkGreen hover:before:bg-darkGreen relative ${dimensions} overflow-hidden bg-transparent px-3 text-darkGreen  transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-white before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full`}
          rel="sponsored noopener noreferrer"
          onMouseEnter={() => arrowHover("greenBg")}
          onMouseLeave={() => arrowHover("")}
        >
          <span className="relative z-10 text-21 mr-2">{text}</span>
          <Image
            src={arrowsrc}
            width={20}
            height={20}
            alt={"arrow"}
            className="z-10"
          />
        </a>
      )}
    </>
  );
};

export default Button;
