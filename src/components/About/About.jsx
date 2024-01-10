// import React from 'react';

import styles from './About.module.css';
import { getImageUrl } from '../../utils';

export const About = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          className={styles.aboutImage}
          src={getImageUrl('about/aboutImage.png')}
          alt='Me using laptop'
        />
        <ul className={styles.aboutItems}>
          {/* <li className={styles.aboutItem}>
            <img src={getImageUrl('about/cursorIcon.png')} alt='Cursor image' />
            <div className={styles.container}>
              <h3>Frontend Developer</h3>
              <p>
                I am a frontend developer with experiance in building responsive
                and optimized sites
              </p>
            </div>
          </li> */}
          <li className={styles.aboutItem}>
            <img src={getImageUrl('about/serverIcon.png')} alt='Server image' />
            <div className={styles.container}>
              <h3>Backend Developer</h3>
              <p>
                I have experiance developing fast and optimized backend systems
                and APIs
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
