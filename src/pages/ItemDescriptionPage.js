import '../styles/ItemDescriptionPage.css';
import { useState, useRef, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import { supabase } from '../supabase.js';

function ItemDescriptionPage() {

    const urlParamater = useParams();
    const id = urlParamater.id;
    const itemImageContainerRef = useRef();
    const navigate = useNavigate();
    const [selectedColour, setSelectedColour] = useState('');
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const [showAddedToCartMessage, setShowAddedToCartMessage] = useState(false);

    const [itemDetails, setItemDetails] = useState({});

    let [actualPrice, setActualPrice] = useState(null);

    const [userConfirmedItemDetails, setUserConfirmedItemDetails] = useState([]);

    useEffect(() => {
        //checking if itemDetails is not empty
        if (Object.keys(itemDetails).length !== 0) {
            let userConfirmedItem = [
                {
                    id: itemDetails.id,
                    name: itemDetails.name,
                    img: itemDetails.img[0],
                    category: itemDetails?.category,
                    price: actualPrice,
                    colour: selectedColour
                }
            ]

            setUserConfirmedItemDetails(userConfirmedItem);
            setActualPrice(itemDetails?.original_price - (itemDetails?.discount_percentage * itemDetails?.original_price / 100));
        }


    }, [itemDetails, actualPrice, selectedColour]);

    useEffect(() => {
        window.scrollTo(0, 0);

        async function getSingleItem() {
            const { data, error } = await supabase
                .from("bags")
                .select("*")
                .eq("id", id);

            if (data && data.length !== 0) {
                setItemDetails(data[0]);
            } else {
                setItemDetails({});
            }
            if (error) {
                console.error("Error fetching data", error)
            }
        }

        getSingleItem();

    }, [id]);

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




        if (selectedColour.length === 0) {
            setShowErrorMessage(true);
        } else {
            localStorage.setItem('confirm-item-details', JSON.stringify(userConfirmedItemDetails));
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

            {Object.keys(itemDetails).length !== 0 &&
                <div className="section-container">
                    <h1 className="item-description-heading-text black-text">{itemDetails.name}</h1>
                    <div className="item-row">
                        <div className="item-image-container">
                            <div ref={itemImageContainerRef} className="image-container">


                                {itemDetails.img.map((item) => (
                                    <img key={item} className="item-image" src={item} alt="item-image" />
                                ))}


                            </div>

                            <div className="image-navigate-button-container">
                                <img onClick={() => { handleImageNavigation('left') }} className="arrow-icon-image" src={require('../assets/icons/left_arrow.png')} alt="left" />
                                <img onClick={() => { handleImageNavigation('right') }} className="arrow-icon-image" src={require('../assets/icons/right_arrow.png')} alt="right" />
                            </div>
                        </div>

                        <div className="item-content-container">
                            <div className="price-container">
                                {itemDetails.discount_percentage !== null &&
                                    <h1 className="strike-text light-gray-text">Rs {itemDetails.original_price}</h1>

                                }
                                <h1 className="black-text">Rs {itemDetails.original_price - (itemDetails.discount_percentage * itemDetails.original_price / 100)}</h1>
                            </div>




                            {
                                itemDetails.in_stock_quantity === 0 ?
                                    (
                                        <p className="dark-gray-text out-of-stock-text">Out of stock</p>

                                    ) :
                                    (

                                        <>
                                            <select value={selectedColour} onChange={(event) => {
                                                setSelectedColour(event.target.value);
                                            }}>
                                                <option value="" disabled>choose colour</option>
                                                {itemDetails.avaiable_colours && itemDetails.avaiable_colours.map((item) => (
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
            }




        </div>
    )
}

export default ItemDescriptionPage;