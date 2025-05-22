import '../styles/HomePage.css';
import Banner from '../components/Banner.js';
import CardSection from '../components/CardSection.js';



function HomePage() {
    return (
        <>
            <Banner />

            <div className="section-container">
                <CardSection />
            </div>

            <div className="section-container coloured-background-section">

                <div className="coloured-background-section-image-container">
                    <img className="coloured-background-section-image" src={require('../assets/images/bannerimage.jpg')} alt="model-image" />
                </div>

                <div className="coloured-background-content">
                    <h1 className="white-text">Follow us for updates and exclusive offers on</h1>
                    <div className="social-media-icon-container">
                        <p>f</p>
                        <p>i</p>
                    </div>
                </div>
            </div>


            <h1 className="center-aligned-text heading-text">Our Designs</h1>
            <div className="image-slider-section-container">
                <div className="slider-image-item">
                    <img className="slider-image" src={require('../assets/images/bannerimage.jpg')} alt="items-image" />
                </div>

                <div className="slider-image-item">
                    <img className="slider-image" src={require('../assets/images/bannerimage.jpg')} alt="items-image" />
                </div>
                <div className="slider-image-item">
                    <img className="slider-image" src={require('../assets/images/bannerimage.jpg')} alt="items-image" />
                </div>
                <div className="slider-image-item">
                    <img className="slider-image" src={require('../assets/images/bannerimage.jpg')} alt="items-image" />
                </div>
                <div className="slider-image-item">
                    <img className="slider-image" src={require('../assets/images/bannerimage.jpg')} alt="items-image" />
                </div>







            </div>
        </>
    )
}

export default HomePage;