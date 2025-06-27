import '../styles/Cart.css';
import { useState } from 'react';
import { useNavigate } from 'react-router';

function Cart(props) {
    // console.log(props);
    const navigate = useNavigate();
    const [cartItemsArray, setCartItemsArray] = useState([
        {
            id: 1,
            name: 'testname',
            colour: 'tesecolour',
            img: 'hello',
            category: 'backpacks',
            price: 100
        },
        {
            id: 2,
            name: 'testname',
            colour: 'tesecolour',
            img: 'hello',
            category: 'backpacks',
            price: 200
        }
    ]);

    function goToItemDescriptionPage(itemID, itemCategory) {
        console.log('clicked');
        props.closeCart();
        navigate(`/category/${itemCategory}/${itemID}`);
    }

    console.log(cartItemsArray);

    function handleCancelItem(value) {
        console.log('cancel clicked', value);
        const filteredCartItemsArray = cartItemsArray.filter((item) => {

            return item !== cartItemsArray[value];

        });

        console.log(filteredCartItemsArray);
        setCartItemsArray(filteredCartItemsArray);
    }
    return (
        <div className={`cart ${props.cartClicked === true ? 'show-cart' : 'close-cart'} `}>

            <div className="cart-header">
                <h1 className="white-text">Cart</h1>
                <div onClick={props.closeCart} className="cart-close-button">
                    <p className="white-text">close</p>
                </div>
            </div>

            <div className="cart-item-container">
                <div className="order-item-container">

                    {
                        cartItemsArray.map((item, index) => (
                            <div key={item.id} className="order-item">

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

            <div className="button-layout button-transparent-background button-gray-border">
                <div className="button-background-container button-gray-background"></div>
                <p className="button-text dark-gray-text">checkout</p>
            </div>
        </div>
    )
}

export default Cart;