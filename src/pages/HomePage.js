import '../styles/HomePage.css';
import Banner from '../components/Banner.js';
import CardSection from '../components/CardSection.js';
import { useEffect, useState } from 'react';
import { supabase } from '../supabase.js';
import { useNavigate } from 'react-router';

function HomePage() {

    const [newCollectionArray, setNewCollectionArray] = useState([])

    const [modelImageArray, setModelImageArray] = useState([]);

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



        getNewCollectionArray();

    }, []);

    useEffect(() => {
        async function getModelsImages() {
            const { data, error } = await supabase
                .from("models_list")
                .select("*");

            if (data) {
                setModelImageArray(data);
            }
            if (error) {
                console.error("Error fetching data");
            }
        }

        getModelsImages();
    }, []);



    return (
        <>
            <Banner />

            <div className="section-container">
                <CardSection cardItemsArray={newCollectionArray} cardItemsHeadingText="Latest Drop" />
            </div>


            {modelImageArray.map((item, index) => (
                <div key={item.id} className={`section-container coloured-background-section ${index % 2 === 0 && 'exchange-position'}`}>

                    <div className="coloured-background-section-image-container">
                        <img className="coloured-background-section-image" src={item.img_url} alt="model-image" />
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