import React from 'react'

export default function AboutMe() {
  return (
    <div className='about-me'>
        <div className='box-place-holder'>
            <div className='image-container'>
              <a href='https://www.linkedin.com/in/jacobmanoni/'>
                <img id='image' src='./my-picture.jpg' alt='profile'/>
              </a>
            </div>
        </div>
        <div className='box-place-holder'>
        <p>
        Hi, my name is Jacob Manoni I am a professional web developer with a passion for design and functionality. 
        Feel free to review some of my recent projects built in HTML, CSS, and React.js
        </p>
        </div>

    </div>
  )
}
