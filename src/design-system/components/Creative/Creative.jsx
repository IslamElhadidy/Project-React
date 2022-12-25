import React from 'react'
import './Creative.css'



function Creative({img,name,jop}) {
  return (
    <>
          <div className="row">
              <img src={img} alt="" />
              <h3>{name}</h3>
              <span>{jop}</span>
          </div>

    </>
  )
}

export default Creative