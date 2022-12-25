import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../Overview/Overview.css'


export default function OverviewWrapper({icon , title , description}) {
  return (
    <div className='overview'>  
          <div className="data">
            <div className='icon'> <FontAwesomeIcon icon={icon} /> </div>
            <h2>{title}</h2>
            <p>{description}</p>

          </div>
    </div>
  )
}

