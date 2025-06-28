import '../styles/Banner.css';

function Banner() {
    function handleScrollDown() {
        window.scrollBy({
            top: window.innerHeight - 120,
            behavior: 'smooth'
        });
    }
    return (
        <div className="banner-container">
            {/* <video className="banner-video" autoPlay muted loop>
                <source src={require('../assets/videos/video1.mp4')} type="video/mp4" />
            </video> */}
            <div className="fade-container"></div>
            <div className="banner-content">
                <p className="white-text">Get all types of bags</p>
                <h2 className="white-text">From us</h2>

                <div onClick={handleScrollDown} className="button-layout button-transparent-background button-white-border">
                    <div className="button-background-container button-white-background">
                        <p className="button-text white-text">scroll down</p>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Banner;