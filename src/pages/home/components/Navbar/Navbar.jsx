import React from 'react'
import './Navbar.css'
function Navbar() {
  return (
    <>
        <div className="navbar">
            <div className="container">
              <div className="logo">
                <p>New <span>Event</span></p>
              </div>
              <div className="links">
                <ul>
                  <li><a className='active' href="#!">Intro</a></li>
                  <li><a href="#!">Overview</a></li>
                  <li><a href="#!">Speakers</a></li>
                  <li><a href="#!">Programs</a></li>
                  <li><a href="#!">Register</a></li>
                  <li><a href="#!">Venue</a></li>
                  <li><a href="#!">Sponsors</a></li>
                  <li><a href="#!">Contact</a></li>
                </ul>
              </div>
            </div>
        </div>
    </>
  )
}

export default Navbar