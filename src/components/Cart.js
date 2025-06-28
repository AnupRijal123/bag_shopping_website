import '../styles/Cart.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

function Cart(props) {
    const navigate = useNavigate();
    const [cartItemsArray, setCartItemsArray] = useState([]);
    useEffect(() => {
        //get cart items array from localStorage and store it in array

        setInterval(() => {
            //continuously checking local storage for cart-items change
            const exitingCartItems = JSON.parse(localStorage.getItem('cart-items'));
            if (exitingCartItems !== null) {
                setCartItemsArray(exitingCartItems);
            } else {
                setCartItemsArray([]);
            }
        }, 100);
    }, []);

    function goToItemDescriptionPage(itemID, itemCategory) {
        props.closeCart();
        navigate(`/category/${itemCategory}/${itemID}`);
    }


    function handleCancelItem(value) {
        const filteredCartItemsArray = cartItemsArray.filter((item) => {

            return item !== cartItemsArray[value];

        });

        localStorage.setItem('cart-items', JSON.stringify(filteredCartItemsArray));
    }


    function handleCheckout() {

        navigate('/confirm-order');

        //get confirm-order array from localStorage and add cart item that array and set final array to localStorage

        const confirmOrderArray = JSON.parse(localStorage.getItem('confirm-item-details'));

        if (confirmOrderArray === null) {
            localStorage.setItem('confirm-item-details', JSON.stringify(cartItemsArray))

        } else {
            const newConfirmOrderArray = [...cartItemsArray, ...confirmOrderArray];
            localStorage.setItem('confirm-item-details', JSON.stringify(newConfirmOrderArray));
        }

        //clearing cart array from localStorage

        localStorage.removeItem('cart-items');
        props.closeCart();

    }


    return (
        <div className={`cart ${props.cartClicked === true ? 'show-cart' : 'close-cart'} `}>

            <div className="cart-header">
                <h1 className="white-text">Cart</h1>
                <p onClick={props.closeCart} className="red-text cursor-pointer scale-hover">close</p>


            </div>

            <div className="cart-item-container">

                {cartItemsArray.length === 0 &&
                    <p className="light-gray-text">Add items to cart to display here</p>

                }

                <div className="order-item-container">

                    {
                        cartItemsArray.map((item, index) => (
                            <div key={index} className="order-item">

                                <div onClick={() => { goToItemDescriptionPage(item.id, item.category) }} className="order-item-left-container cursor-pointer">
                                    <img className="order-item-image" src={require('../assets/images/bannerimage.jpg')} alt="item-image" />
                                    <h2 className="black-text small-text">{item.name}</h2>
                                </div>

                                <div className="order-item-right-container">
                                    <div>
                                        <p className="light-gray-text small-text">colour : {item.colour}</p>
                                        <p className="light-gray-text small-text">price : Rs {item.price}</p>
                                    </div>

                                    <div onClick={() => { handleCancelItem(index) }} className="button-layout button-transparent-background button-gray-border">
                                        <div className="button-background-container button-gray-background"></div>
                                        <p className="button-text dark-gray-text">cancel item</p>
                                    </div>

                                </div>
                            </div>
                        ))}
                </div>

            </div>

            <div onClick={handleCheckout} className="button-layout button-transparent-background button-gray-border">
                <div className="button-background-container button-gray-background"></div>
                <p className="button-text dark-gray-text">checkout</p>
            </div>
        </div>
    )
}

export default Cart;