import '../styles/Footer.css';

function Footer() {
    return (
        <div className="footer">
            <h1>logo</h1>
            <div className="footer-column" >
                <h2>For queries</h2>
                <p>example@gmail.com</p>
            </div>
            <div className="footer-column">
                <h2>Links</h2>

                <div>
                    <p>location</p>
                    <p>Kathmandu,Nepal</p>
                </div>


                <div>
                    <p>social meida</p>
                    <div className="social-media-icon-container">
                        <p>f</p>
                        <p>i</p>
                    </div>
                </div>


                <div>
                    <p>contact</p>
                    <p>+977 9851234567,+977 9851765432</p>

                </div>

            </div>


        </div>
    )
}

export default Footer;