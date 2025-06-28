import '../styles/SocialMediaSection.css';

function SocialMediaSection() {
    return (
        <div className="social-media-icon-container">
            <a href="https://www.facebook.com/">
                <img className="social-media-icon" src={require('../assets/logos/facebooklogo.jpg')} alt="fb-logo" />
            </a>

            <a href="https://www.instagram.com/">
                <img className="social-media-icon" src={require('../assets/logos/instagramlogo.jpg')} alt="insta-logo" />
            </a>

        </div>
    )
}

export default SocialMediaSection;