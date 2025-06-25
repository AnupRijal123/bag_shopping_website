import '../styles/ConfirmOrderPage.css';
import { useNavigate } from 'react-router';
import { useState, useEffect } from 'react';

function ConfirmOrderPage() {

    const navigate = useNavigate();
    const [orderItemsArray, setOrderItemsArray] = useState([]);

    const totalPrice = orderItemsArray.reduce((total, item) => {
        return total + item.price;
    }, 0);

    const deliveryCharge = 150;

    const toPayAmount = totalPrice + deliveryCharge;


    useEffect(() => {
        window.scrollTo(0, 0);


        console.log(JSON.parse(localStorage.getItem('confirm-item-details')));
        setOrderItemsArray(JSON.parse(localStorage.getItem('confirm-item-details')));

    }, []);

    function goToItemDescriptionPage(itemID, itemCategory) {
        console.log('clicked');
        navigate(`/category/${itemCategory}/${itemID}`);
    }

    return (
        <div className="confirm-order-container">
            <div className="top-container"></div>
            <div className="section-container">

                <div className="order-item-container">

                    {orderItemsArray.length !== 0 &&
                        orderItemsArray.map((item) => (
                            <div key={item.id} className="order-item">

                                <div onClick={() => { goToItemDescriptionPage(item.id, item.category) }} className="order-item-left-container cursor-pointer">
                                    <img className="order-item-image" src={require('../assets/images/bannerimage.jpg')} alt="item-image" />
                                    <h2 className="black-text">{item.name}</h2>
                                </div>

                                <div className="order-item-right-container">
                                    <div>
                                        <p className="light-gray-text">colour : {item.colour}</p>
                                        <p className="light-gray-text">price : Rs {item.price}</p>
                                    </div>

                                    <div className="button-layout button-transparent-background button-gray-border">
                                        <div className="button-background-container button-gray-background"></div>
                                        <p className="button-text dark-gray-text">cancel item</p>
                                    </div>

                                </div>
                            </div>
                        ))}






                </div>


                <div className="order-description-container">
                    <div className="order-description-row">
                        <h2 className="black-text">Total</h2>
                        <h2 className="black-text">Rs {totalPrice}</h2>
                    </div>

                    <div className="order-description-row">
                        <h2 className="black-text">Delivery Charge</h2>
                        <h2 className="black-text">Rs {deliveryCharge}</h2>
                    </div>

                    <div className="addition-symbol-container">
                        <h2 className="black-text">+</h2>
                    </div>

                    <div className="order-description-row">
                        <h2 className="black-text">To pay</h2>
                        <h2 className="black-text">Rs {toPayAmount}</h2>
                    </div>

                    <p className="black-text small-text ">Estimated delivery : june 21 to june 25</p>
                </div>

                <div className="customer-information-input-container">
                    <h1 className="black-text">For delivery, Please enter your following details</h1>
                    <div className="customer-input-row">
                        <p className="black-text">Full Name</p>
                        <input type="text" />
                    </div>

                    <div className="customer-input-row">
                        <p className="black-text">Contact No.</p>
                        <input type="tel" />
                    </div>

                    <div className="customer-input-row">
                        <p className="black-text">Delivery Address</p>
                        <input type="address" />
                    </div>

                    <div className="customer-input-row">
                        <p className="black-text">Payment method</p>
                        <select>
                            <option>Cash on Delivery</option>
                            <option disabled>Esewa(will be available soon)</option>
                        </select>
                    </div>


                    <div className="button-layout button-transparent-background button-gray-border">
                        <div className="button-background-container button-gray-background"></div>
                        <p className="button-text dark-gray-text">confirm order</p>
                    </div>

                    <p className="red-text">Failed! Please enter all the details above.</p>
                    <p className="green-text">Your order has been placed successfully and will be delivered to your address.</p>


                </div>

            </div>


        </div>
    )
}

export default ConfirmOrderPage;