import '../styles/ItemDescriptionPage.css';
import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router';

function ItemDescriptionPage() {

    const itemImageContainerRef = useRef();
    const navigate = useNavigate();
    const [selectedColour, setSelectedColour] = useState('');
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const [showAddedToCartMessage, setShowAddedToCartMessage] = useState(false);

    const itemDetails = {
        id: 1,
        name: 'Nike sports bag for travelling and schools',
        avaiable_colours: ['red', 'black', 'green', 'blue'],
        description: 'this is very good quality waterproof bag with good padding',
        images: ['hello', 'hello', 'hello'],
        category: 'backpacks',
        originalPrice: 1000,
        discountPercentage: 10,
        inStockQuantity: 0
    };

    let actualPrice = itemDetails.originalPrice - (itemDetails.discountPercentage * itemDetails.originalPrice / 100);

    let userConfirmedItemDetails = [
        {
            id: itemDetails.id,
            name: itemDetails.name,
            img: itemDetails.images[0],
            category: itemDetails.category,
            price: actualPrice,
            colour: selectedColour
        }
    ]

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        if (selectedColour.length !== 0) {
            setShowErrorMessage(false);
        }

    }, [selectedColour]);

    function handleImageNavigation(value) {
        if (value === 'left') {
            itemImageContainerRef.current.scrollBy(-350, 0);
        }
        if (value === 'right') {
            itemImageContainerRef.current.scrollBy(350, 0);
        }

    }

    function goToConfirmOrderPage() {



        localStorage.setItem('confirm-item-details', JSON.stringify(userConfirmedItemDetails));

        if (selectedColour.length === 0) {
            setShowErrorMessage(true);
        } else {
            navigate('/confirm-order');
        }

    }

    function handleAddToCart() {

        if (selectedColour.length === 0) {
            setShowErrorMessage(true);
        } else {
            setShowAddedToCartMessage(true);

            setTimeout(() => {
                setShowAddedToCartMessage(false);
            }, 1000);

            const cartItems = localStorage.getItem('cart-items');

            if (cartItems === null) {
                //add new cart array to localStorage
                localStorage.setItem('cart-items', JSON.stringify(userConfirmedItemDetails));
            } else {
                //get cart array from localStorage and add new item to array and add final array to localStorage
                const exisitingCartItems = JSON.parse(localStorage.getItem('cart-items'));
                exisitingCartItems.push(userConfirmedItemDetails[0]);

                //adding this new array to localStorage
                localStorage.setItem('cart-items', JSON.stringify(exisitingCartItems));

            }
        }

    }

    return (
        <div className="item-description-container">
            <div className="top-container"></div>


            <div className="section-container">
                <h1 className="item-description-heading-text black-text">{itemDetails.name}</h1>
                <div className="item-row">
                    <div className="item-image-container">
                        <div ref={itemImageContainerRef} className="image-container">
                            <img className="item-image" src={require('../assets/images/bannerimage.jpg')} alt="item-image" />
                            <img className="item-image" src={require('../assets/images/bannerimage.jpg')} alt="item-image" />
                            <img className="item-image" src={require('../assets/images/bannerimage.jpg')} alt="item-image" />

                        </div>

                        <div className="image-navigate-button-container">
                            <img onClick={() => { handleImageNavigation('left') }} className="arrow-icon-image" src={require('../assets/icons/left_arrow.png')} alt="left" />
                            <img onClick={() => { handleImageNavigation('right') }} className="arrow-icon-image" src={require('../assets/icons/right_arrow.png')} alt="right" />
                        </div>
                    </div>

                    <div className="item-content-container">
                        <div className="price-container">
                            {itemDetails.discountPercentage !== null &&
                                <h1 className="strike-text light-gray-text">Rs {itemDetails.originalPrice}</h1>

                            }
                            <h1 className="black-text">Rs {itemDetails.originalPrice - (itemDetails.discountPercentage * itemDetails.originalPrice / 100)}</h1>
                        </div>




                        {
                            itemDetails.inStockQuantity === 0 ?
                                (
                                    <p className="dark-gray-text out-of-stock-text">Out of stock</p>

                                ) :
                                (

                                    <>
                                        <select value={selectedColour} onChange={(event) => {
                                            setSelectedColour(event.target.value);
                                        }}>
                                            <option value="" disabled>choose colour</option>
                                            {itemDetails.avaiable_colours.map((item) => (
                                                <option key={item} value={item}>{item}</option>

                                            ))}
                                        </select>


                                        {showErrorMessage === true &&
                                            <p className="red-text small-text">please choose a colour</p>
                                        }

                                        <div className="button-container">

                                            <div onClick={goToConfirmOrderPage} className="button-layout button-transparent-background button-gray-border">
                                                <div className="button-background-container button-gray-background"></div>
                                                <p className="button-text dark-gray-text">Buy</p>
                                            </div>

                                            <div onClick={handleAddToCart} className="button-layout button-transparent-background button-gray-border">
                                                <div className="button-background-container button-gray-background"></div>
                                                <p className="button-text dark-gray-text">Add to cart</p>
                                            </div>


                                            {showAddedToCartMessage === true &&
                                                <div className="added-to-card-message-container">
                                                    <p className="green-text">Added to Cart</p>
                                                    <img className="green-check-image" src={require('../assets/logos/green_check.png')} alt="check-mark" />
                                                </div>
                                            }

                                        </div>
                                    </>

                                )
                        }





                        <p className="black-text">{itemDetails.description}</p>
                    </div>


                </div>
            </div>

        </div>
    )
}

export default ItemDescriptionPage;