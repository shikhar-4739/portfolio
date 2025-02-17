import React from "react";
import { GoLinkExternal } from "react-icons/go";

const Experience = () => {
  return (
    <div className="space-y-8 tracking-wide leading-6">
      <h1 className="text-lg text-white font-medium underline decoration-wavy underline-offset-8">
        Work Experience
      </h1>
      <div className="bg-blue-900 rounded-xl pt-4 pb-6 mx-1">
        <div className="flex flex-row px-10">
          <div className="w-1/2">
            <h1 className="text-2xl font-semibold text-white">
              Quanta Society
            </h1>
            <p className="text-base font-normal pl-2 text-white">
              Frontend Devloper
            </p>
          </div>
          <div className="w-1/2 flex justify-end text-white">2022 - 2023</div>
        </div>
        <p className="pl-10 pr-10 mt-4 text-[#9CA3AF]">
          Developed and maintained responsive and dynamic web applications using
          HTML5, CSS3, JavaScript, and React.js and implement web features,
          ensuring seamless user experiences.
        </p>
      </div>

      <div className="bg-blue-900 rounded-xl pt-4 pb-6 mx-1">
        <div className="flex flex-row px-10">
          <div className="w-1/2">
            <h1 className="text-2xl font-semibold text-white flex items-center">
              SprintHack2.0 Hackathon
              <a
                href="https://www.linkedin.com/company/upchaar-india/posts/?feedView=all"
                target="_blank"
                className="ml-2"
              >
                <GoLinkExternal className="h-6 w-6" />
              </a>
            </h1>
            <p className="text-base font-normal pl-2 text-white">
              Full Stack Devloper
            </p>
          </div>
        </div>
        <p className="pl-10 pr-10 mt-4 text-[#9CA3AF]">
          Developed a{" "}
          <span className="text-white">Doctor Consultation Platform</span>{" "}
          allowing patients to contact doctors and book appointments seamlessly.
        </p>
        <p className="pl-10 pr-10 mt-2 text-[#9CA3AF]">
          Created a user-friendly interface using{" "}
          <span className="text-white">React.js</span> for patients to easily
          search for doctors and schedule consultations.
        </p>
        <p className="pl-10 pr-12 mt-2 text-[#9CA3AF]">
          Built server-side logic with Node.js and Express.js to manage doctor
          availability,{" "}
          <span className="text-white">appointment scheduling,</span> and secure
          patient data handling and also Integrated a{" "}
          <span className="text-white">real-time messaging</span> feature.
        </p>
      </div>
    </div>
  );
};

export default Experience;
