import '../styles/CategoryListingPage.css';
import CardSection from '../components/CardSection.js';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { supabase } from '../supabase.js';

function CategoryListingPage() {
    const urlCategory = useParams();

    const [categoryArray, setCategoryArray] = useState([]);

    const [categoryHeadingText, setCategoryHeadingText] = useState('hello');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    useEffect(() => {

        async function getCategoryItems() {
            const { data, error } = await supabase
                .from("bags")
                .select("id,name,img,category,original_price,discount_percentage,in_stock_quantity")
                .eq("category", urlCategory.items)

            if (data) {
                setCategoryArray(data);
            }
            if (error) {
                console.error("Error fetching data", error);
            }
        }

        getCategoryItems();

        //setting category heading text when url params changes

        if (urlCategory.items === 'backpack') {
            setCategoryHeadingText('backpacks')
        }
        if (urlCategory.items === 'handbag') {
            setCategoryHeadingText('hand bags')
        }
        if (urlCategory.items === 'ladies') {
            setCategoryHeadingText('ladies bags')
        }
        if (urlCategory.items === 'school') {
            setCategoryHeadingText('school bags')
        }
        if (urlCategory.items === 'college') {
            setCategoryHeadingText('college bags')
        }
        if (urlCategory.items === 'office') {
            setCategoryHeadingText('office bags')
        }
        if (urlCategory.items === 'shopping') {
            setCategoryHeadingText('shopping bags')
        }
        if (urlCategory.items === 'guitar') {
            setCategoryHeadingText('guitar bags')
        }
        if (urlCategory.items === 'gym') {
            setCategoryHeadingText('gym bags')
        }
        if (urlCategory.items === 'delivery') {
            setCategoryHeadingText('delivery bags')
        }

    }, [urlCategory]);


    return (
        <div className="category-container ">
            <div className="top-container"></div>
            <div className="section-container">
                <CardSection cardItemsArray={categoryArray} cardItemsHeadingText={categoryHeadingText} />
            </div>
        </div>
    )
}


export default CategoryListingPage;