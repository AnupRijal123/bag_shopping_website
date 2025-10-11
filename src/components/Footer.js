import '../styles/Footer.css';
import SocialMediaSection from './SocialMediaSection.js';


function Footer() {

    return (
        <div className="footer">
            <img className="footer-logo" src={require('../assets/logos/bulbul.png')} alt="logo" />
            <SocialMediaSection />
        </div>
    )
}

export default Footer;