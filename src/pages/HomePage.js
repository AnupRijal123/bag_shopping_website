import Banner from '../components/Banner.js';
import CardSection from '../components/CardSection.js';
import { useEffect, useState } from 'react';
import { supabase } from '../supabase.js';

function HomePage() {

    const [newCollectionArray, setNewCollectionArray] = useState([])

    const [modelImageUrl, setModelImageUrl] = useState('');


    useEffect(() => {
        window.scrollTo(0, 0);


        async function getNewCollectionArray() {
            const { data, error } = await supabase.from("bags")
                .select("id,name,img,category,original_price,discount_percentage,in_stock_quantity")
                .order("created_at", { ascending: false })
                .limit(20);

            if (data) {
                setNewCollectionArray(data);
            }
            if (error) {
                console.error("Error fetching data", error)
            }
        }

        async function getModelImage() {
            const { data, error } = await supabase
                .from("homepage_model_image")
                .select("image_url");

            if (data) {
                setModelImageUrl(data[0].image_url);
            }
            if (error) {
                console.error('Error fetching model image', error);
            }
        }

        getNewCollectionArray();
        getModelImage();

    }, []);



    return (
        <>
            <Banner />

            <div className="section-container">
                <CardSection cardItemsArray={newCollectionArray} cardItemsHeadingText="Latest Drop" />
            </div>

            <div className="section-container coloured-background-section">

                <div className="coloured-background-section-image-container">

                    {modelImageUrl.length !== 0 &&
                        <img className="coloured-background-section-image" src={modelImageUrl} alt="model-image" />
                    }
                </div>

                <div className="coloured-background-content">
                    <h1 className="black-text">Find Us on Social Media</h1>


                </div>
            </div>


        </>
    )
}

export default HomePage;