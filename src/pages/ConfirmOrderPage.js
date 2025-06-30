import '../styles/ConfirmOrderPage.css';
import { useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import { supabase } from '../supabase.js';

function ConfirmOrderPage() {

    const navigate = useNavigate();

    const [fullName, setFullName] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [deliveryAddress, setDeliveryAddress] = useState('');
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);



    const [orderItemsArray, setOrderItemsArray] = useState([]);

    const totalPrice = orderItemsArray.reduce((total, item) => {
        return total + item.price;
    }, 0);

    const deliveryCharge = 150;

    const toPayAmount = totalPrice + deliveryCharge;

    const today = new Date();

    const deliveryStartDate = new Date();
    deliveryStartDate.setDate(today.getDate() + 2);

    const deliveryEndDate = new Date();
    deliveryEndDate.setDate(today.getDate() + 4);

    const formattedDeliveryStartDate = deliveryStartDate.toLocaleString("default",
        {
            month: "long",
            day: "numeric"
        })

    const formattedDeliveryEndDate = deliveryEndDate.toLocaleString("default",
        {
            month: "long",
            day: "numeric"
        }
    )


    useEffect(() => {
        window.scrollTo(0, 0);

        setInterval(() => {
            const existingOrderItemsArray = JSON.parse(localStorage.getItem('confirm-item-details'));

            if (existingOrderItemsArray !== null) {
                setOrderItemsArray(existingOrderItemsArray);
            } else {
                setOrderItemsArray([]);
            }
        }, 100);

    }, []);

    useEffect(() => {

        if (fullName.length !== 0 && contactNumber.length !== 0 && deliveryAddress.length !== 0) {
            setShowErrorMessage(false);
        }

    }, [fullName, contactNumber, deliveryAddress]);

    function goToItemDescriptionPage(itemID, itemCategory) {
        navigate(`/category/${itemCategory}/${itemID}`);
    }

    function handleCancelItem(value) {
        const filteredOrderItem = orderItemsArray.filter((item, index) => {
            return index !== value;
        });
        //replacing localstorage order array with this filtered array
        localStorage.setItem('confirm-item-details', JSON.stringify(filteredOrderItem));
    }


    async function handleConfirmOrder() {
        //if any of form field is empty showing error message
        if (fullName.length === 0 || contactNumber.length === 0 || deliveryAddress.length === 0) {
            setShowErrorMessage(true);
        } else {

            const { error } = await supabase
                .from("orders_information")
                .insert(
                    {
                        full_name: fullName,
                        contact_no: contactNumber,
                        delivery_address: deliveryAddress,
                        order_details: orderItemsArray,
                        total_price: totalPrice,
                        delivery_charge: deliveryCharge,
                        to_pay_amount: toPayAmount,
                        delivery_date: `${formattedDeliveryStartDate} to ${formattedDeliveryEndDate}`


                    }
                );

            if (error) {
                console.error("Error inserting order", error)
            } else {
                setShowSuccessMessage(true);

                setTimeout(() => {
                    setShowSuccessMessage(false);
                }, 2000);

                //clearing form field
                setFullName('');
                setContactNumber('');
                setDeliveryAddress('');


                //clearing orderItemsArray
                setOrderItemsArray([]);
                localStorage.removeItem('confirm-item-details');


            }
        }
    }


    return (
        <div className="confirm-order-container">
            <div className="top-container"></div>
            <div className="section-container">
                {orderItemsArray.length === 0 ?
                    (
                        <p className="light-gray-text center-aligned-text">No items to display here,the items you buy will show here</p>
                    ) :
                    (
                        <div className="order-item-container">

                            {
                                orderItemsArray.map((item, index) => (
                                    <div key={index} className="order-item">

                                        <div onClick={() => { goToItemDescriptionPage(item.id, item.category) }} className="order-item-left-container cursor-pointer">
                                            <img className="order-item-image" src={item.img} alt="item-image" />
                                            <h2 className="black-text">{item.name}</h2>
                                        </div>

                                        <div className="order-item-right-container">
                                            <div>
                                                <p className="light-gray-text">colour : {item.colour}</p>
                                                <p className="light-gray-text">price : Rs {item.price}</p>
                                            </div>

                                            <div onClick={() => { handleCancelItem(index) }} className="button-layout button-transparent-background button-gray-border">
                                                <div className="button-background-container button-gray-background"></div>
                                                <p className="button-text dark-gray-text">cancel item</p>
                                            </div>

                                        </div>
                                    </div>
                                ))}
                        </div>
                    )
                }





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

                    <p className="black-text small-text ">Estimated delivery : {formattedDeliveryStartDate} to {formattedDeliveryEndDate}</p>
                </div>


                <div className="customer-information-input-container">
                    <h1 className="black-text">For delivery, Please enter your following details</h1>

                    <div className="customer-input-row">
                        <p className="black-text">Full Name</p>
                        <input type="text"
                            value={fullName}
                            placeholder="enter full name"
                            onChange={(event) => {
                                setFullName(event.target.value);
                            }}
                        />
                    </div>

                    <div className="customer-input-row">
                        <p className="black-text">Contact No.</p>
                        <input
                            type="tel"
                            value={contactNumber}
                            inputMode="numeric"
                            maxLength={10}
                            placeholder="enter contact number"
                            onChange={(event) => {
                                const input = event.target.value;
                                if (/^\d*$/.test(input)) {
                                    setContactNumber(input);
                                }
                            }}
                        />
                    </div>

                    <div className="customer-input-row">
                        <p className="black-text">Delivery Address</p>
                        <textarea
                            value={deliveryAddress}
                            placeholder="type address or paste google map link "
                            onChange={(event) => {
                                setDeliveryAddress(event.target.value);
                            }}
                        ></textarea>
                    </div>

                    <div className="customer-input-row">
                        <p className="black-text">Payment method</p>
                        <select>
                            <option>Cash on Delivery</option>
                        </select>
                    </div>


                    {orderItemsArray.length !== 0 &&
                        <div onClick={handleConfirmOrder} className="button-layout button-transparent-background button-gray-border">
                            <div className="button-background-container button-gray-background"></div>
                            <p className="button-text dark-gray-text">confirm order</p>
                        </div>
                    }




                    {showErrorMessage === true &&
                        <p className="red-text center-aligned-text">Failed! Please enter all the details above.</p>
                    }


                    {showSuccessMessage === true &&
                        <p className="green-text center-aligned-text">Your order has been placed successfully and will be delivered to your address.</p>
                    }


                </div>



            </div>


        </div>
    )
}

export default ConfirmOrderPage;