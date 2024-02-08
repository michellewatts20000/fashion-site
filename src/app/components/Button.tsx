import React from "react";
import Image from "next/image";

interface BestGridProps {
  text: string;
}

const BestGrid: React.FC<BestGridProps> = ({ text }) => {
  return (
    <button className="flex items-center gap-2 justify-center font-poppins  text-22 w-[224px] h-[65px] border-2 border-darkGreen text-darkGreen">
      {text}
      <Image
        src={"/arrow.svg"}
        width={20}
        height={20}
        alt={"best selling image 1"}
      />
    </button>
  );
};

export default BestGrid;
