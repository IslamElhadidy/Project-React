import './Contact.css'

function Contact() {
  return (
    <>
        <div className="contact">
            <div className="container">
                <div className="left">
                    <h4>New <span>Event</span></h4>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi quod dolorem pariatur, hic dolore tenetur!amet consectetur adipisicing elit. Quasi quod dolorem pariatur, hic dolore tenetur!amet consectetur adipisicing elit. Quasi quod dolorem pariatur,</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi quod dolorem pariatur, hic dolore tenetur pariatur, hic dolore tenetur!amet consectetur adipisicing elit. Quasi quod dolorem pariatur, hic dolore tenetur!amet consectetur adipisicing el</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quo quod quaerat accusamus! Accusamus.amet consectetur adipisicing elit. Quasi quod dolorem pariatur, hic dolore tenetur!</p>
                    <button className='contact-btn'>Dawnload Now</button>
                </div>
                <div className="right">
                    <h4>Keep In <span>Touch</span></h4>
                    <div className="contact-info">
                        <input type="text" name="" id="" placeholder='Name' />
                        <input type="email" name="" id="" placeholder='Email' />
                        <input type="text" name="" id="" placeholder='Message' />
                        <button className='contact-btn-right'>Send</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Contact