// import React from 'react'

import styles from './Hero.module.css';
import { getImageUrl } from '../../utils';

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I am Koushik</h1>
        <p className={styles.description}>
          I am a full stack developer with 1 year of experiance using React Node
          Express and Mongodb. Reach out if you would like to learn more!
        </p>
        <a href='mailto:iamkoushik1999@gmail.com' className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl('hero/heroImage.png')}
        alt='Hero image of me'
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
