import React from 'react'
import './About.css'
import imgabout from '..//..//..//..//images/about/overview-img.jpg'
function About() {
  return (
    <>
        <div className="about">
            <div className="container">
                <div className="left">
                    <h4>New Event Is a Fully Responsive One-Page For Events, 
                    conferences for workshop.
                    </h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem est veritatis quod dolores provident quo eligendi, mollitia quasi nulla enim.Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem est veritatis quod dolores provident quo eligendi, mollitia quasi nulla enim.Lorem ipsum dolor sit amet consectetur adipisicing elit</span>
                </div>
                <div className="right">
                    <img src={imgabout} alt="about-img" />
                </div>
            </div>
        </div>
    
    
    </>
  )
}

export default About