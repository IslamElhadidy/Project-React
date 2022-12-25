import React from 'react'
import Slider from './Slider'
import './Speakers.css'
function Speakers() {
  return (
    <>
        <div className="speakers">
            <div className="container">
                <h4>Creative <span>Speakers</span></h4>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, molestiae dolor!</p>
                <div className='slider-container'>
                    <Slider />  
                </div>
            </div>
        </div>
    </>
  )
}

export default Speakers