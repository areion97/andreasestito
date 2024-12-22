import React from 'react';
import profile from '../images/me.jpg';
import Card from './Card';
import styles from '../css/home.module.scss';

function Home() {
  return (
    <div className={styles.container}>
      <Card>
        <div className={styles.profileSection}>
          <img alt="me" src={profile} className={styles.profileImage}></img>
        </div>
        <div className={styles.introductionText}>
          My name is Andrea and I am from Parma, Italy. I created this website
          to introduce what are my main hobbies and passions.
          <br />
          <br />
        </div>
      </Card>
    </div>
  );
}

export default Home;
