import '../styles/CategoryListingPage.css';
import CardSection from '../components/CardSection.js';
import { useParams } from 'react-router';
import { useEffect } from 'react';

function CategoryListingPage() {
    const urlCategory = useParams();

    const categoryArray = [
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

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <div className="category-container ">
            <div className="top-container"></div>
            <div className="section-container">
                <CardSection cardItemsArray={categoryArray} cardItemsHeadingText={urlCategory.items} />
            </div>
        </div>
    )
}


export default CategoryListingPage;