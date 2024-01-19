// import React from 'react'

import styles from './Contact.module.css';
import { getImageUrl } from '../../utils';

export const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl('contact/emailIcon.png')} alt='Icon' />
          <a href='mailto:iamkoushik1999@gmail.com'>Email</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl('contact/linkedinIcon.png')} alt='Icon' />
          <a href='https://www.linkedin.com/in/koushikdutta/'>Linked In</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl('contact/emailIcon.png')} alt='Icon' />
          <a href='https://github.com/iamkoushik1999'>Github</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl('contact/linkIcon.png')} alt='Icon' />
          <a href='https://linktr.ee/iamkoushik1999'>All Links</a>
        </li>
      </ul>
    </footer>
  );
};
