import '../styles/HomePage.css';
import Banner from '../components/Banner.js';
import CardSection from '../components/CardSection.js';
import { useEffect, useRef } from 'react';



function HomePage() {

    const imageSliderRef = useRef();


    useEffect(() => {
        console.log('mounted');
        console.log(imageSliderRef.current);

        //image slider scrolling 
        const slideInterval = setInterval(() => {

            console.log('slide');

            console.log(imageSliderRef.current.scrollLeft);

            console.log(imageSliderRef.current.scrollWidth);

            if (imageSliderRef.current.scrollLeft + imageSliderRef.current.clientWidth < imageSliderRef.current.scrollWidth) {
                imageSliderRef.current.scrollBy(imageSliderRef.current.clientWidth, 0);
            } else {
                console.log('reached at end')
                //scroll to beginning
                imageSliderRef.current.scrollTo(0, 0);
            }


        }, 3000);

        return () => {
            clearInterval(slideInterval);
        }

    }, []);

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


            <div className="section-container">
                <h1 className="section-heading-text center-aligned-text heading-text black-text">Our Designs</h1>

                <div ref={imageSliderRef} className="image-slider-section-container">
                    <div className="slider-image-item">
                        <div className="slider-image-description">
                            <p className="white-text">bag name</p>

                            <div className="button-layout button-transparent-background button-white-border">
                                <div className="button-background-container button-white-background"></div>
                                <p className="button-text white-text">see prodct</p>
                            </div>
                        </div>
                        <img className="slider-image" src={require('../assets/images/bannerimage.jpg')} alt="items-image" />
                    </div>


                    <div className="slider-image-item">
                        hello
                    </div>


                    {/* <div className="slider-image-item">
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
                    </div> */}







                </div>
            </div>
        </>
    )
}

export default HomePage;