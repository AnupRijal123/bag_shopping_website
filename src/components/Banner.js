import '../styles/Banner.css';

function Banner() {
    return (
        <div className="banner-container">
            <img className="banner-image" src={require('../assets/images/bannerimage.jpg')} alt="banner" />
            <div className="fade-container">fade</div>
            <div className="banner-content">hello</div>
        </div>
    )
}

export default Banner;