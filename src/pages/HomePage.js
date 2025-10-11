import '../styles/HomePage.css';
import Banner from '../components/Banner.js';
import CardSection from '../components/CardSection.js';
import { useEffect, useState } from 'react';
import { supabase } from '../supabase.js';
import { useNavigate } from 'react-router';

function HomePage() {

    const [newCollectionArray, setNewCollectionArray] = useState([])

    const [modelImageUrl, setModelImageUrl] = useState('');
    const modelImageArray = [
        {
            id: 7,
            imgUrl: 'https://amvrxmqetzmlniyrrlyc.supabase.co/storage/v1/object/public/backpacks//backpack1.jpeg',
            category: 'backpack',
            description: 'This is test description'
        },
        {
            id: 9,
            imgUrl: 'https://amvrxmqetzmlniyrrlyc.supabase.co/storage/v1/object/public/handbags//handbag1.jpeg',
            category: 'handbag',
            description: 'This is test description'
        }
    ];

    const navigate = useNavigate();


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


            {modelImageArray.map((item, index) => (
                <div key={item.id} className={`section-container coloured-background-section ${index % 2 == 0 && 'exchange-position'}`}>

                    <div className="coloured-background-section-image-container">
                        <img className="coloured-background-section-image" src={item.imgUrl} alt="model-image" />
                    </div>

                    <div className="coloured-background-content">
                        <div onClick={() => {
                            navigate(`/category/${item.category}/${item.id}`);
                        }}
                            className="button-layout button-transparent-background button-gray-border">
                            <div className="button-background-container button-gray-background"></div>
                            <p className="button-text dark-gray-text">Show more</p>
                        </div>

                    </div>
                </div>
            ))}






        </>
    )
}

export default HomePage;