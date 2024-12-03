import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="IntroSection">
      <div className="IntroContent">
        <h1>
          Capture <span>Your Journey</span>, Not Just Photos
        </h1>
        <p>
          More than a travel log. A time capsule of your experiences, emotions, and personal growth.
        </p>
        <ul>
          <li>Transform fleeting moments into lasting memories</li>
          <li>Create a narrative that goes beyond snapshots</li>
          <li>Preserve the stories that shape your world</li>
        </ul>
        <p>
          Every journey tells a story. Yours is waiting to be written, remembered, and cherished.
        </p>
        <Link to="about">Start your Jorney!</Link>
      </div>
      <div className="IntroImage">
        <img 
          src="https://media.istockphoto.com/id/649871644/photo/young-people-on-mountain-hike-at-sunset.jpg?s=612x612&w=0&k=20&c=OWyQdUNsCAIGwvHbS3qjr5JvSk8SShNU4_NLZsJDbQg=" 
          alt="Hikers enjoying a mountain sunset"
        />
      </div>
    </section>
  );
};

export default Home;