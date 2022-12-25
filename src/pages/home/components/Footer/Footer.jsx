import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGithub, faGoogle, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <>
        <footer>
            <div className="container">
                <h4>Copywrite 2022 Your Company | Design: <span>Eslam Elhadidy</span></h4>
                <div className="links">
                    <a href="#!"><FontAwesomeIcon icon = {faFacebookF} /></a>
                    <a href="#!"><FontAwesomeIcon icon = {faTwitter} /></a>
                    <a href="#!"><FontAwesomeIcon icon = {faInstagram} /></a>
                    <a href="#!"><FontAwesomeIcon icon = {faGoogle} /></a>
                    <a href="#!"><FontAwesomeIcon icon = {faGithub} /></a>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer;