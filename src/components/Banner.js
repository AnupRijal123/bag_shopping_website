import '../styles/Banner.css';

function Banner() {
    return (
        <div className="banner-container">
            {/* <img className="banner-image" src={require('../assets/images/bannerimage.jpg')} alt="banner" /> */}
            <video className="banner-video" autoPlay muted loop>
                <source src={require('../assets/videos/video1.mp4')} type="video/mp4" />
            </video>
            <div className="fade-container"></div>
            <div className="banner-content">
                <p className="white-text">Get all types of bags</p>
                <h2 className="white-text">From us</h2>


            </div>
        </div>
    )
}

export default Banner;