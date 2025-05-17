import '../styles/Banner.css';

function Banner() {
    return (
        <div className="banner-container">
            {/* <img className="banner-image" src={require('../assets/images/bannerimage.jpg')} alt="banner" /> */}
            <video className="banner-video" autoPlay muted loop>
                <source src={require('../assets/videos/video1.mp4')} type="video/mp4" />
            </video>
            <div className="fade-container"></div>
            <div className="banner-content">hello</div>
        </div>
    )
}

export default Banner;