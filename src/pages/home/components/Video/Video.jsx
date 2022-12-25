import React from 'react'
import './Video.css'

function Video() {
  return (
    <>
        <div className="video">
            <div className="container">
                <div className="left">
                    <h4>Watch Video.
                    </h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio expedita exercitationem, ex autem quis optio similique vitae nobis quas voluptatem! nobis quas voluptatem!</p>
                    <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed totam nihil, earum dolor, delectus, laborum adipisci voluptas dignissimos neque pariatur optio corrupti ea. Consectetur dicta aperiam atque quas reprehenderit!
                    </span>
                </div>
                <div className="right">
                    <iframe className='video-p' src="https://www.youtube.com/embed/XDPwXQjAlB0" title='video'></iframe>
                </div>
            </div>
        </div>
    </>
  )
}

export default Video