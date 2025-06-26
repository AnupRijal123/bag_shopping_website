import '../styles/Cart.css';
import { useState } from 'react';

function Cart(props) {
    console.log(props)

    return (
        <div className={`cart ${props.cartClicked === true ? 'show-cart' : 'close-cart'} `}>

            <div className="cart-header">
                <h1>Cart</h1>
                <div onClick={props.closeCart} className="cart-close-button">
                    <p className="white-text">close</p>
                </div>
            </div>

            <div className="cart-item-container">
                <h1>hello</h1>
                <h1>hello</h1>
            </div>

            <div className="button-layout button-transparent-background button-gray-border">
                <div className="button-background-container button-gray-background"></div>
                <p className="button-text dark-gray-text">checkout</p>
            </div>
        </div>
    )
}

export default Cart;