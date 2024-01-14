// import React from 'react'

import projects from '../../data/projects.json';
import { getImageUrl } from '../../utils';

export const Projects = () => {
  return (
    <section className=''>
      <h2 className=''>Personal Projects</h2>
      <div className=''>
        {projects.map((project, id) => {
          return (
            <div className='' key={id}>
              <img
                src={getImageUrl(project.imageSrc)}
                alt={`${project.title} image`}
              />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul>
                {project.skills.map((skill, id) => {
                  return <li key={id}>{skill}</li>;
                })}
              </ul>
              <div>
                <a href={project.demo}>Demo</a>
                <a href={project.source}>Source</a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
