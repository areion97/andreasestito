import React from 'react';
import profile from '../images/me.jpg';
import Card from './Card';

function Home() {
  return (
    <div className="container">
        <div className="profileSection">
          <img
            width={250}
            height={600}
            alt="me"
            src={profile}
            className="profileImage"
          ></img>
        </div>
        <div className="introductionText">
          <h2>
            <br />
            <br />
            My name is Andrea and I am from Parma, Italy. <br /> I created this
            website to introduce what are my main hobbies and passions.
            <br />
            💻🏋🏻‍♂️🚗📷🎸

          </h2>
          <br />
          <br />
        </div>
    </div>
  );
}

export default Home;
