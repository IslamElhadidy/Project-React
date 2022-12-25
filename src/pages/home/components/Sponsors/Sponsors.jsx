import sponData from '../../../../design-system/components/Sponsors/Data'
import Sponsorss from '../../../../design-system/components/Sponsors/Sponsorss'
import './Sponsors.css'

function Sponsors() {
  return (
    <>
        <div className="sponsors">
            <div className="container">
                <div className="title">
                    <h4>Our <span>Sponsors</span></h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, voluptatem!</p>
                </div>
                <div className="data-spon">
                    {
                        sponData.map(element => {
                            return(
                                <Sponsorss key={element.id} title={element.title} />
                            )
                        })
                    }
                </div>
            </div>
        </div> 
    </>
  )
}

export default Sponsors