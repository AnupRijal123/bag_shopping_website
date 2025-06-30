import '../styles/HomePage.css';
import Banner from '../components/Banner.js';
import CardSection from '../components/CardSection.js';
import SocialMediaSection from '../components/SocialMediaSection.js';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import { supabase } from '../supabase.js';

function HomePage() {

    const imageSliderRef = useRef();
    const navigate = useNavigate();
    const [newCollectionArray, setNewCollectionArray] = useState([])

    const [sliderImageArray, setSliderImageArray] = useState([]);

    useEffect(() => {



    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);

        async function getSliderImageArray() {
            const { data, error } = await supabase.from('our_design')
                .select("*");

            if (data) {
                setSliderImageArray(data);
            }
            if (error) {
                console.error("Error fetching data", error);
            }

        }



        async function getNewCollectionArray() {
            const { data, error } = await supabase.from("bags")
                .select("id,name,img,category,original_price,discount_percentage,in_stock_quantity")
                .order("created_at", { ascending: false })
                .limit(7);

            if (data) {
                console.log(data)
                setNewCollectionArray(data);
            }
            if (error) {
                console.error("Error fetching data", error)
            }
        }

        getSliderImageArray();
        getNewCollectionArray();

        //image slider scrolling 
        const slideInterval = setInterval(() => {


            if (imageSliderRef.current.scrollLeft + imageSliderRef.current.clientWidth < imageSliderRef.current.scrollWidth) {
                imageSliderRef.current.scrollBy(imageSliderRef.current.clientWidth, 0);
            } else {
                //scroll to beginning
                imageSliderRef.current.scrollTo(0, 0);
            }


        }, 3000);

        return () => {
            clearInterval(slideInterval);
        }

    }, []);

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
                            <img className="slider-image" src={item.img} alt="items-image" />
                        </div>

                    ))}

                </div>
            </div>
        </>
    )
}

export default HomePage;