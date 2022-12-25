import './Accordion.css'
import DataAccordion from './DataAccordion'



function Accordion() {
  return (
    <>
        <div className="accordion">
            <div className="container">
                <div className="text">
                <h4>Do You Have <span>Questions </span> ?</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, voluptatem!</p>
                </div>
                <div className="accordion-data">
                  <DataAccordion />
                </div>
            </div>
        </div>
    </>
  )
}

export default Accordion