import React from 'react'

export default function Projects() {
  return (
    <div className='projects-container'>
        <h3>PROJECTS</h3>
        <div className='project-images-container'>
          <a href='https://friendly-cray-e1e19d.netlify.app'>
            <img className='project-images' src='./nft-card-screenshot.jpg' alt='nft card'/>
          </a>
          <a href='https://cranky-kowalevski-003196.netlify.app'>
            <img className='project-images' src='./order-summary-screenshot.jpg' alt='order summary'/>
          </a>
          <a href='https://youthful-fermi-418abe.netlify.app'>
            <img className='project-images' src='./profile-card-screenshot.jpg' alt='profile card'/>
          </a>
          <a href='https://eager-shaw-0e8d0f.netlify.app/'>
            <img className='project-images' src='./tip-calculator-screenshot.jpg' alt='tip calculator'/>
          </a>
        </div>
    </div>
  )
}
