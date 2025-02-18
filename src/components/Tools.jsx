import React from "react";
import { motion } from "framer-motion";
import Button from "./button";
import { BiLogoMongodb } from "react-icons/bi";
import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiSolidity } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { RiSupabaseFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiPrisma } from "react-icons/si";
import { SiGraphql } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { SiShadcnui } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa6";
import { GiArtificialIntelligence } from "react-icons/gi";
import { TbBrandCpp } from "react-icons/tb";
import { CiCircleChevLeft } from "react-icons/ci";
import { FaGitAlt } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const upperMarquee = [
  { icon: <IoLogoHtml5 />, title: "HTML" },
  { icon: <IoLogoCss3 />, title: "CSS" },
  { icon: <RiJavascriptFill />, title: "JavaScript" },
  { icon: <FaReact />, title: "React.js" },
  { icon: <RiNextjsFill />, title: "Next.js" },
  { icon: <IoLogoFirebase />, title: "Firebase" },
  { icon: <RiSupabaseFill />, title: "Supabase" },
  { icon: <FaNodeJs />, title: "Node.js" },
  { icon: <SiExpress />, title: "Express.js" },
  { icon: <BiLogoMongodb />, title: "MongoDB" },
  { icon: <BiLogoPostgresql />, title: "PostgreSQL" },
  {icon:  <FaGitAlt />, title: "Git" },
  {icon: <FaGithub />, title: "GitHub" },
];

const lowerMarquee = [
  { icon: <SiPrisma />, title: "Prisma" },
  { icon: <SiGraphql />, title: "GraphQL" },
  { icon: <SiTypescript />, title: "TypeScript" },
  { icon: <RiTailwindCssFill />, title: "TailwindCSS" },
  { icon: <CiCircleChevLeft />, title: "C" },
  { icon: <TbBrandCpp />, title: "C++" },
  { icon: <FaPython />, title: "Python" },
  { icon: <FaJava />, title: "Java" },
  { icon: <SiShadcnui />, title: "Shadcn-UI" },
  { icon: <FaBootstrap />, title: "Bootstrap" },
  { icon: <SiSolidity />, title: "Solidity" },
];

const Tools = () => {
  return (
    <div className="space-y-8 px-4 md:px-0">
      <h1 className="text-lg text-white font-medium underline decoration-wavy underline-offset-8">Tools that i have used</h1>
      <div className="container px-4 md:mx-auto space-y-6">
        <div className="flex">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="flex flex-shrink-0"
          >
            {upperMarquee.map((item, index) => {
              return <Button key={index} title={item.title} icon={item.icon} />;
            })}
          </motion.div>
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="flex flex-shrink-0"
          >
            {upperMarquee.map((item, index) => {
              return <Button key={index} title={item.title} icon={item.icon} />;
            })}
          </motion.div>
        </div>

        <div className="flex">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="flex flex-shrink-0"
          >
            {lowerMarquee.map((item, index) => {
              return <Button key={index} title={item.title} icon={item.icon} />;
            })}
          </motion.div>
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="flex flex-shrink-0"
          >
            {lowerMarquee.map((item, index) => {
              return <Button key={index} title={item.title} icon={item.icon} />;
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
