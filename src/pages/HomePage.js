import '../styles/HomePage.css';
import Banner from '../components/Banner.js';
import CardSection from '../components/CardSection.js';
import SocialMediaSection from '../components/SocialMediaSection.js';
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router';



function HomePage() {

    const imageSliderRef = useRef();
    const navigate = useNavigate();
    const newCollectionArray = [
        {
            id: 1,
            name: 'Nike',
            img: 'bannerimage.jpg',
            category: 'backpacks',
            originalPrice: 2500,
            discountPercentage: 10,
            inStockQuantity: 0,
        },
        {
            id: 2,
            name: 'Addidas',
            img: 'bannerimage.jpg',
            category: 'ladies bags',
            originalPrice: 2100,
            discountPercentage: 10,
            inStockQuantity: 200,
        },
        {
            id: 3,
            name: 'Puma',
            img: 'bannerimage.jpg',
            category: 'handbags',
            originalPrice: 1800,
            discountPercentage: 5,
            inStockQuantity: 200,

        },
        {
            id: 4,
            name: 'Vans',
            img: 'bannerimage.jpg',
            category: 'others',
            originalPrice: 1000,
            discountPercentage: null,
            inStockQuantity: 5,
        }
    ];

    const sliderImageArray = [
        {
            id: 1,
            name: 'Luios viton aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa asdasdas assssssssssss',
            img: 'hello',
            category: 'backpacks'


        },
        {
            id: 2,
            name: 'adiadas',
            img: 'hello',
            category: 'backpacks'

        },
        {
            id: 3,
            name: 'vans',
            img: 'hello',
            category: 'backpacks'

        },
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

    function goToItemDescription(itemId, itemCategory) {
        navigate(`/category/${itemCategory}/${itemId}`);
    }

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

                    {sliderImageArray.map((item) => (

                        <div className="slider-image-item" key={item.id}>
                            <div className="slider-image-description">
                                <p className="white-text">{item.name}</p>

                                <div className="button-layout button-transparent-background button-white-border">
                                    <div className="button-background-container button-white-background"></div>
                                    <p onClick={() => { goToItemDescription(item.id, item.category) }} className="button-text white-text">see product</p>
                                </div>
                            </div>
                            <img className="slider-image" src={require('../assets/images/bannerimage.jpg')} alt="items-image" />
                        </div>

                    ))}

                </div>
            </div>
        </>
    )
}

export default HomePage;