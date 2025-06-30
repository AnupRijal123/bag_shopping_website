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
                    <p className="white-text">supppliersbulbul@gmail.com</p>
                </div>

                <div className="footer-column">
                    <h2 className="white-text">Links</h2>

                    <div>
                        <p className="white-text">location</p>
                        <p className="white-text">Kathmandu</p>
                    </div>


                    <div>
                        <p className="white-text">social media</p>
                        <SocialMediaSection />
                    </div>

                    <div>
                        <p className="white-text">whatsapp</p>
                        <div className="whatsapp-image-container">
                            <img className="whatsapp-image" src={require('../assets/logos/whatsapplogo.png')} alt="whatsapp-logo" />
                            <p className="white-text">9851161443</p>
                        </div>

                    </div>

                    <div>
                        <p className="white-text">contact</p>
                        <p className="white-text">9851161443 , 9813739391 , 9851100687</p>

                    </div>

                </div>
            </div>

            <div className="footer-second-row">
                <p className="white-text">All Rights Reserved,{currentYear}</p>
                <p className="white-text">Estd : 2011</p>
            </div>
            <p className="small-text light-gray-text center-aligned-text ">Website designed and coded by Anup Rijal</p>



        </div>
    )
}

export default Footer;