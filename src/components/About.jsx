import React from 'react'
import team from "../assets/about.png"
import "./about.css"

const About = () => {
  return (
    <div className='aboutSection'>
      <div className='aboutContent'>
        <h1>About <span>Us</span></h1>
        <div className='aboutText'>
          <p>We believe that travel is more than just moving from one place to another; it's about experiencing new cultures, making memories, and finding inspiration in the world around us. This platform is designed for wanderers, adventurers, and storytellers to document their travels, reflect on their experiences, and celebrate the joy of exploration.</p>
          <p>Whether you're embarking on a solo adventure, a family trip, or a journey with friends, our journal helps you capture every moment. From stunning landscapes to hidden gems, and from bustling cities to tranquil escapes, our timeline and diary features make it easy to preserve your memories and share them with others!</p>
        </div>
      </div>
      <div className='aboutImage'> 
        <img src={team} alt="Team" />
      </div>
    </div>
  );
};

export default About



