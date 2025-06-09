import '../styles/SocialMediaSection.css';

function SocialMediaSection() {
    return (
        <div className="social-media-icon-container">
            <img className="social-media-icon" src={require('../assets/logos/facebooklogo.jpg')} alt="fb-logo" />

            <img className="social-media-icon" src={require('../assets/logos/instagramlogo.jpg')} alt="insta-logo" />
        </div>
    )
}

export default SocialMediaSection;