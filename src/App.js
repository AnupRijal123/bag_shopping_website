import './styles/App.css';
import Navbar from './components/Navbar.js';
import Banner from './components/Banner.js'
import CardSection from './components/CardSection.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <>
      <Navbar />
      <Banner />

      <div className="section-container">
        <CardSection />
      </div>

      <div className="section-container coloured-background-section">

        <div className="coloured-background-section-image-container">
          <img className="coloured-background-section-image" src={require('./assets/images/bannerimage.jpg')} alt="model-image" />
        </div>

        <div className="coloured-background-content">
          <h1 className="white-text">Follow us for updates and exclusive offers on</h1>
          <div className="social-media-icon-container">
            <p>f</p>
            <p>i</p>
          </div>
        </div>
      </div>

      <div className="image-slider-section-container">
        <div className="slider-image-item">
          <img className="slider-image" src={require('./assets/images/bannerimage.jpg')} alt="items-image" />
        </div>



        <div className="slider-image-item">
          <img className="slider-image" src={require('./assets/images/bannerimage.jpg')} alt="items-image" />
        </div>
        <div className="slider-image-item">
          <img className="slider-image" src={require('./assets/images/bannerimage.jpg')} alt="items-image" />
        </div>
        <div className="slider-image-item">
          <img className="slider-image" src={require('./assets/images/bannerimage.jpg')} alt="items-image" />
        </div>
        <div className="slider-image-item">
          <img className="slider-image" src={require('./assets/images/bannerimage.jpg')} alt="items-image" />
        </div>



      </div>

      <Footer />



    </>
  )
}

export default App;