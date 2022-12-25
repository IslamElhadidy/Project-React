import React from 'react'
import './Programs.css'
import { faClockRotateLeft, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Programs({img,time,room,title,name,content}) {
  return (
    <>
        <div className="programs">
            <img src={img} alt="" />
            <div className="content">
                <div className="icons">
                    <div className="icon-1">
                        <FontAwesomeIcon icon = {faClockRotateLeft  } />
                        <span>{time}</span>
                    </div>
                    <div className="icon-2">
                        <FontAwesomeIcon icon = {faMapMarkedAlt} />
                        <span>Room {room}</span>
                    </div>
                </div>
                <div className="text">
                    <h2>{title}</h2>
                    <span>{name}</span>
                    <p>{content}</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Programs