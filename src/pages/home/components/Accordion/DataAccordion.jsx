
import { useState } from 'react';
import './DataAccordion.css'
import {data} from './data'

function DataAccordion() {
    const[active,setActive] = useState(0);

    const toggle = (i) => {
      if(active === i) {
        return setActive(null);
      }
      setActive(i)
    };
  return (
        <>
            <div className="accordion">
                <div className="data">
                    {                
                    data.map((element,i) => {
                        return (
                            <div className="box" key={i} onClick={() => toggle(i)}>
                                <div className="title">
                                    <h2>{element.qust}</h2>
                                    <span>+</span>
                                </div>
                                <footer  className={ active === i ? "show" : ""}>
                                        <span>{element.answerOne}</span>
                                        <span>{element.answerTwo}</span>
                                </footer>
                            </div>
                        )
                    })
                    
                    }
                </div>
            </div>
        </>
  )
}

export default DataAccordion