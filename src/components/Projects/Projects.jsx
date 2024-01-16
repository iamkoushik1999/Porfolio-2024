// import React from 'react'

import styles from './Projects.module.css';
// Data
import projects from '../../data/projects.json';
// Project Card
import { ProjectCard } from './ProjectCard';

export const Projects = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Personal Projects</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
    </section>
  );
};
