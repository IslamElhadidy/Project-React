import React from 'react'
import './Programs.css'
import Tabs from './Tabs'

function Programs() {
  return (
    <>
        <div className="programs">
            <div className="container">
                <h4>Our <span>Programs</span></h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, error. Laboriosam voluptates dolor veritatis? Quos facilis omnis </p>

                <div className="data">
                    <Tabs />
                </div>
            </div>
        </div>
    </>
  )
}

export default Programs