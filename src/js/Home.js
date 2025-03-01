import React from 'react';
import profile from '../images/me.jpg';
import Card from './Card';

function Home() {
  return (
    <div className="container">
      <Card>
        <div className="profileSection">
          <img alt="me" src={profile} className="profileImage"></img>
        </div>
        <div className="introductionText">
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
