// import React from 'react'

// Data
import projects from '../../data/projects.json';
// Project Card
import { ProjectCard } from './ProjectCard';

export const Projects = () => {
  return (
    <section className=''>
      <h2 className=''>Personal Projects</h2>
      <div className=''>
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
    </section>
  );
};
