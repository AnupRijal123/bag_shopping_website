import '../styles/HomePage.css';
import Banner from '../components/Banner.js';
import CardSection from '../components/CardSection.js';
import SocialMediaSection from '../components/SocialMediaSection.js';
import { useEffect, useRef } from 'react';



function HomePage() {

    const imageSliderRef = useRef();
    const newCollectionArray = [
        {
            id: 1,
            name: 'Nike',
            img: 'bannerimage.jpg',
            originalPrice: 2500,
            discountPercentage: 10,
            inStockQuantity: 0,
        },
        {
            id: 2,
            name: 'Addidas',
            img: 'bannerimage.jpg',
            originalPrice: 2100,
            discountPercentage: 10,
            inStockQuantity: 200,
        },
        {
            id: 3,
            name: 'Puma',
            img: 'bannerimage.jpg',
            originalPrice: 1800,
            discountPercentage: 5,
            inStockQuantity: 200,

        },
        {
            id: 4,
            name: 'Vans',
            img: 'bannerimage.jpg',
            originalPrice: 1000,
            discountPercentage: null,
            inStockQuantity: 5,
        }
    ];


    // useEffect(() => {

    //     //image slider scrolling 
    //     const slideInterval = setInterval(() => {


    //         if (imageSliderRef.current.scrollLeft + imageSliderRef.current.clientWidth < imageSliderRef.current.scrollWidth) {
    //             imageSliderRef.current.scrollBy(imageSliderRef.current.clientWidth, 0);
    //         } else {
    //             //scroll to beginning
    //             imageSliderRef.current.scrollTo(0, 0);
    //         }


    //     }, 3000);

    //     return () => {
    //         clearInterval(slideInterval);
    //     }

    // }, []);

    return (
        <>
            <Banner />

            <div className="section-container">
                <CardSection cardItemsArray={newCollectionArray} cardItemsHeadingText="New Collection" />
            </div>

            <div className="section-container coloured-background-section">

                <div className="coloured-background-section-image-container">
                    <img className="coloured-background-section-image" src={require('../assets/images/bannerimage.jpg')} alt="model-image" />
                </div>

                <div className="coloured-background-content">
                    <h1 className="white-text">Follow us for updates and exclusive offers on</h1>


                    <SocialMediaSection />
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
                                <p className="button-text white-text">see product</p>
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