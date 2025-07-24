import '../styles/SalePage.css';
import CardSection from '../components/CardSection.js';
import { useState, useEffect } from 'react';
import { supabase } from '../supabase.js';

function SalePage() {
    const [saleItemsArray, setSaleItemsArray] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);

        async function getSaleItems() {
            const { data, error } = await supabase
                .from("bags")
                .select("id,name,img,category,original_price,discount_percentage,in_stock_quantity")
                .gte("discount_percentage", 30);

            if (data) {
                setSaleItemsArray(data);
            }

            if (error) {
                console.error("Error fetching data", error);
            }

        }

        getSaleItems();
    }, []);

    return (
        <>
            <div className="sale-page-container">
                <div className="top-container"></div>

                <div className="section-container">

                    <CardSection cardItemsArray={saleItemsArray} cardItemsHeadingText="sale" />


                </div>
            </div>
        </>
    )
}
export default SalePage;