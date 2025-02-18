import React from "react";
import { IoLogoGithub } from "react-icons/io";
import { GoLinkExternal } from "react-icons/go";

const Card = ({ image, title, description, techUsed, liveLink, gitLink }) => {
  console.log(liveLink);
  return (
    <div className="max-w-full md:max-w-xl h-auto overflow-hidden  -tracking-tighter leading-6">
      <div className="relative">
        <img
          className="w-full h-full object-cover rounded-xl"
          src={image}
          alt={`${title} image`}
        />
      </div>
      <div className=" pt-4">
        <div className="font-bold text-md text-white">{title}</div>
      </div>
      <div>
        {techUsed.map((tech, index) => (
          <span
            key={index}
            className="inline-block  py-1 pr-1 text-xs font-medium text-[#9CA3AF]"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="pt-2">
        <p className="text-[#9CA3AF] font-semibold text-xs">{description}</p>
      </div>
      <div className=" pt-3 pb-2 flex gap-4">
        <a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className=" text-[#9CA3AF] text-sm font-medium flex justify-center items-center hover:text-white"
        >
          <GoLinkExternal className="mr-1" /> Live Demo
        </a>
        <a
          href={gitLink}
          target="_blank"
          rel="noopener noreferrer"
          className=" text-[#9CA3AF] text-sm font-medium flex justify-center items-center hover:text-white"
        >
          <IoLogoGithub className="mr-1" /> GitHub
        </a>
      </div>
    </div>
  );
};

export default Card;
