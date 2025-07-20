import '../styles/AdminViewOrders.css';
import { useEffect, useState } from 'react';
import { supabase } from '../supabase.js';

function AdminViewOrders() {

    const [ordersArray, setOrdersArray] = useState([]);
    console.log(ordersArray);

    useEffect(() => {
        console.log('admin order page mounted');
        async function getOrders() {
            const { data, error } = await supabase
                .from("orders_information")
                .select("*");

            if (data) {
                setOrdersArray(data)
            }
            if (error) {
                console.error("Error fetching data", error);
            }
        }

        getOrders();

    }, []);

    return (
        <table>
            <thead>
                <tr>
                    <th>SN</th>
                    <th>Order Number</th>
                    <th>Full Name</th>
                    <th>Contact</th>
                    <th>Delivery Address</th>
                    <th>Order Details</th>
                    <th>Order Placed Date</th>
                    <th>Total Price</th>
                    <th>Delivery Date</th>
                    <th>Status</th>
                </tr>
            </thead>

            <tbody>
                {ordersArray.map((item, index) => (
                    <tr key={item.id}>
                        <td>{index + 1}</td>
                        <td>{item.order_no}</td>
                        <td>{item.full_name}</td>
                        <td>{item.contact_no}</td>
                        <td>{item.delivery_address}</td>
                        <td>
                            {item.order_details.map((i, index) => (
                                <div key={index}>
                                    <p>Code : {i.code}</p>
                                    <p>Colour :{i.colour}</p>
                                    <p>Price : {i.price}</p>
                                    <img src={i.img} className="order-item-image" alt="order-image" />
                                </div>

                            ))}
                        </td>

                        <td>{new Date(item.created_at).toLocaleDateString('en-CA')}</td>
                        <td>{item.total_price}</td>
                        <td>{item.delivery_date}</td>
                        <td>{item.order_status}</td>

                    </tr>
                ))}

            </tbody>
        </table>
    )
}

export default AdminViewOrders;