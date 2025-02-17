import React from 'react'
import Card from './Card';

const Projects = () => {
    const projects = [
        {
          image: '/logo.png',
          title: 'Project Title',
          description: 'This is a brief description of the project.',
          techUsed: ['React', 'Tailwind CSS', 'Node.js'],
          liveDemoLink: 'https://live-demo-link.com',
          githubLink: 'https://github.com/username/repository',
        },
        {
            image: '/logo.png',
            title: 'Project Title',
            description: 'This is a brief description of the project.',
            techUsed: ['React', 'Tailwind CSS', 'Node.js'],
            liveDemoLink: 'https://live-demo-link.com',
            githubLink: 'https://github.com/username/repository',
          },
          {
            image: '/logo.png',
            title: 'Project Title',
            description: 'This is a brief description of the project.',
            techUsed: ['React', 'Tailwind CSS', 'Node.js'],
            liveDemoLink: 'https://live-demo-link.com',
            githubLink: 'https://github.com/username/repository',
          },
          {
            image: '/logo.png',
            title: 'Project Title',
            description: 'This is a brief description of the project.',
            techUsed: ['React', 'Tailwind CSS', 'Node.js'],
            liveDemoLink: 'https://live-demo-link.com',
            githubLink: 'https://github.com/username/repository',
          },
        // Add more projects as needed
      ];

  return (
    <div className='space-y-8 tracking-wide leading-6'>
      <h1 className='text-lg text-white font-medium underline decoration-wavy underline-offset-8'>Featured Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
      {projects.map((project, index) => (
        <Card key={index} {...project} />
      ))}
    </div>
    </div>
  )
}

export default Projects
