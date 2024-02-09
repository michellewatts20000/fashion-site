import React from "react";

interface SectionHeadingProps {
  title: string;
  description: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  description,
}) => {
  return (
    <div className="mx-auto text-center pt-20 pb-10 md:px-0 px-10">
      <h1 className="section-heading mb-2">{title}</h1>
      <p className="text-darkGreen">{description}</p>
    </div>
  );
};

export default SectionHeading;
