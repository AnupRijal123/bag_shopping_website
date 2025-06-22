import '../styles/Footer.css';
import SocialMediaSection from './SocialMediaSection.js';

function Footer() {

    const currentYear = new Date().getFullYear();

    return (
        <div className="footer">

            <div className="footer-first-row">
                <img className="brand-logo" src={require('../assets/logos/bb_logo.png')} alt="logo" />

                <div className="footer-column" >
                    <h2 className="white-text">For queries</h2>
                    <p className="white-text">example@gmail.com</p>
                </div>

                <div className="footer-column">
                    <h2 className="white-text">Links</h2>

                    <div>
                        <p className="white-text">location</p>
                        <p className="white-text">Kathmandu,Nepal</p>
                    </div>


                    <div>
                        <p className="white-text">social media</p>


                        <SocialMediaSection />
                    </div>


                    <div>
                        <p className="white-text">contact</p>
                        <p className="white-text">+977 9851234567,+977 9851765432</p>

                    </div>

                </div>
            </div>

            <div className="footer-second-row">
                <p className="white-text">All Rights Reserved,{currentYear}</p>
                <p className="small-text light-gray-text">Website designed and coded by Anup Rijal</p>
            </div>


        </div>
    )
}

export default Footer;