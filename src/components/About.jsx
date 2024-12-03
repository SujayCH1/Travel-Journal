import React from 'react'
import team from "../assets/about.png"
import "./about.css"

const About = () => {
  return (
    <div className='aboutSection'>
      <div className='aboutContent'>
        <h1>About <span>Us</span></h1>
        <div className='aboutText'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quo quasi perferendis maiores, accusamus optio veritatis expedita aspernatur sed alias molestias beatae hic, eius voluptates harum iste rem itaque nobis iusto. Sapiente eaque libero, animi fugiat repellendus molestias illum nisi sunt.</p>
          <p>Reprehenderit nihil modi reiciendis quidem eius sunt, impedit, dolorem hic itaque eaque quas cupiditate sequi cum ratione architecto perspiciatis quam odio atque optio omnis quasi consequuntur. Architecto, amet inventore. Magni quos ipsum dolor corrupti, iste maiores!</p>
        </div>
      </div>
      <div className='aboutImage'> 
        <img src={team} alt="Team" />
      </div>
    </div>
  );
};

export default About



