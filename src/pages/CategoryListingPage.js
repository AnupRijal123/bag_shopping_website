import '../styles/CategoryListingPage.css';
import { useEffect } from 'react';

function CategoryListingPage() {

    useEffect(() => {
        console.log('category page mounted');
        window.scrollBy(0, 20);
    }, []);

    return (
        <div className="category-container">
            <h1>category</h1>
        </div>
    )
}


export default CategoryListingPage;