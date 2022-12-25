import React from 'react'
import './Header.css'

function Header() {
  return (
    <>
        <header>
            <h3>May 22-5 in Mansoura, Egypt</h3>
            <span>Web Design Conference</span>
            <div className="btn">
                <button className='btn-1'>Learn More</button>
                <button className='btn-2'>Register Now</button>
            </div>
        </header>
    </>
  )
}

export default Header