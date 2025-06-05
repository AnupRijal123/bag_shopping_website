import '../styles/Footer.css';

function Footer() {

    const currentYear = new Date().getFullYear();

    return (
        <div className="footer">

            <div className="footer-first-row">
                <h1>logo</h1>

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
                        <div className="social-media-icon-container">
                            <p>f</p>
                            <p>i</p>
                        </div>
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