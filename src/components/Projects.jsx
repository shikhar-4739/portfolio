import React from "react";
import Card from "./Card";

const Projects = () => {
  
  const projects = [
    {
      image: "/project1.png",
      title: "SnipURL - URL Shortener",
      description: "A URL shortener that shortens long URLs into short links, provides QR codes for quick access, and manage usage stats.",
      techUsed: ["React /", "Tailwind CSS /", "Shadcn-UI /", "Supabase "],
      liveLink: "https://url-shortener-sepia-pi.vercel.app/",
      gitLink: "https://github.com/shikhar-4739/URL-shortener",
    },
    {
      image: "/project2.png",
      title: " Web3 Token Launchpad",
      description: "Web3 platform for token creation, liquidity management, swaps, and airdrops on the Solana blockchain.",
      techUsed: ["React /", "Tailwind CSS /", "Material-UI /", "Solana Web3.js"],
      liveLink: "https://token-launchpad-psi.vercel.app/",
      gitLink: "https://github.com/shikhar-4739/token-launchpad",
    },
    {
      image: "/project3.png",
      title: "SolMate - Wallet App",
      description: "A comprehensive Solana app for airdrops, balance checks, transfers, and message signing using Solana Web3.js.",
      techUsed: ["React /", "Tailwind CSS /", "Radix UI /", "Solana Web3.js"],
      liveLink: "hhttps://wallet-adapter-red.vercel.app/",
      gitLink: "https://github.com/shikhar-4739/wallet-adapter",
    },
    {
      image: "/project4.png",
      title: "Gym Exercise App",
      description: "A gym exercise app that provides a list of exercises, their descriptions, and youtube videos for reference.",
      techUsed: ["React", "Tailwind CSS", "Material-UI", "API"],
      liveLink: "https://shikhar-exercise-app.netlify.app/",
      gitLink: "https://github.com/shikhar-4739/gym-app",
    },
  ];

  return (
    <div className="space-y-8 tracking-wide leading-6 flex flex-col p-4 md:p-0">
      <h1 className="text-lg text-white font-medium underline decoration-wavy underline-offset-8">
        Featured Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
        {projects.map((project, index) => (
          <Card key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
