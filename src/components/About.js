import React from 'react'
import me from '../assets/hi.png'

function About() {
  return (
    <div className="about">
      <img src={me} alt="Jon Spurling aka Happy Coder" className="me" />
      <div className="about-container">
          <h1>Where Code Meets Curiosity (and the Occasional 3D-Printed Gadget)</h1>
          <p>
            Howdy, fellow tech enthusiasts! I'm Jon Spurling, aka "Happy Coder" - a full-stack developer with an unquenchable thirst for problem-solving. Powered by a steady drip of caffeine and the unbridled joy of turning 1s and 0s into something that actually works (most of the time). Whether it's wrangling pixels with React and Material UI or orchestrating server-side symphonies with Node.js and Python, I'm all in!
          </p>
          <p>
            My toolkit is overflowing with goodies like HTML, CSS, JavaScript, and more acronyms than you can shake a
          </p>
      </div>
      </div>  
  )
}

export default About