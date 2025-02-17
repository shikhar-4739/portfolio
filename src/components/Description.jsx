import React from "react";

const Description = () => {
  return (
    <div className="flex flex-row-reverse md:flex-row ">
      <div className="w-2/3 mt-4">
        <h1 className="font-bold text-2xl text-white">Shikhar Varshney</h1>
        <div className="flex flex-row space-x-2 mt-1 ">
          <span className=" bg-[#d8d8d8] text-sm text-[#09090B] py-0.5 px-2 font-medium rounded-full shadow-lg hover:bg-[#96999E] transition duration-300">
            #openToWork
          </span>
          <span className=" bg-[#d8d8d8] text-sm text-[#09090B] py-0.5 px-2 font-medium rounded-full shadow-lg hover:bg-[#96999E] transition duration-300">
            Hire me!
          </span>
        </div>

        <div className="w-full pr-4">
          <div className="mt-4">
            <h1 className="font-medium text-xl text-white">
              About Me
            </h1>
            <p className="text-base font-normal text-[#9CA3AF] leading-6 mt-1 tracking-wide ">
                Hello! I'm a developer from Noida, India. I enjoy programming and exploring technology.
                I am passionate about building <span className="curved-text text-white">scalable applications</span> and learning new technologies.
            </p>
          </div>
          <div className="mt-4">
            <h1 className="font-medium text-xl text-white">
              What I do?
            </h1>
            <p className="text-base font-normal text-[#9CA3AF] leading-6 mt-1 tracking-wide ">
                Passionate Software Developer with a strong foundation in full-stack development.
                <div className="my-2">
                I've participated in various <span className="text-white curved-text">hackathons</span> & ideathons and also do freelancing to improve my skills.<br/>
                when not coding, reading books, chilling with friends, or binge youtube.
                </div>
                I'm <span className="curved-text text-white">open to work</span>, freelance, or collaborate. 
                <a href="mailto:shikhar.varshney2003@gmail.com" className=" curved-text text-white ml-1">
                 Contact Me
              </a>.
            </p>
          </div>
        </div>
      </div>
      
      {/* <div className="w-1/3 border-2 relative block border-white rounded-xl h-1/2 mt-12 mr-4">
         <div className=" bg-[#00adb5] absolute inset-0 size-full rounded-xl -z-10"></div>
        <img src="/logo.png" alt="profile-pic-img" className=" transform rotate-[-5deg]" />
      </div> */}
      <div className="relative mt-12 mr-4 flex items-center h-80 w-72">
         <div className=" bg-[#A99C97] absolute inset-0 rounded-xl -z-10"></div>
        <img src="/profile.jpg" alt="profile-pic-img" className=" rounded-xl h-full w-full transform -rotate-3" />
      </div>
    </div>
  );
};

export default Description;
