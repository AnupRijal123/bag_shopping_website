import '../styles/AdminPage.css';
import { useState } from 'react';
import { useNavigate, useLocation, Outlet } from 'react-router';
import { supabase } from '../supabase.js';


function AdminPage() {

    const navigate = useNavigate();
    const location = useLocation();

    const activeRouteArray = location.pathname.split("/admin/");

    let activeRoute = activeRouteArray[1];

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [adminName, setAdminName] = useState('');


    async function handleLogin() {

        if (email.length === 0 || password.length === 0) {
            alert("Please Enter email and password");
        } else {
            //make api call to backend

            const { data, error } = await supabase
                .from("admin_information")
                .select("admin_name")
                .eq("email", email)
                .eq("password", password);

            if (data) {
                if (data.length === 0) {
                    //no result found
                    alert('No Admin Found')
                } else {
                    //result found
                    alert("Login Successful")
                    setIsAuthenticated(true);
                    setAdminName(data[0].admin_name);
                }
            }
            if (error) {
                console.error("Error fetching data", error);
            }
        }
    }
    function handleLogout() {

        const confirmed = window.confirm("Do you want to logout?");
        if (confirmed === true) {
            setIsAuthenticated(false);
            setAdminName('');
            //clearing form input values
            setEmail('');
            setPassword('');
        }


    }

    return (
        <>
            <div className="admin-navbar">
                <h1 className="white-text">Bulbul Bags Admin Panel</h1>
                <h2 className="white-text">admin : {adminName}</h2>

                {isAuthenticated === true &&
                    <>
                        <button onClick={handleLogout}>Logout</button>
                        <div className="admin-button-container">
                            <h3 onClick={() => {
                                navigate('/admin/orders');
                            }}
                                className={`admin-nav-link-text ${activeRoute === 'orders' && 'active-button'}`}>View Orders</h3>

                            <h3 onClick={() => {
                                navigate('/admin/add');
                            }}
                                className={`admin-nav-link-text ${activeRoute === 'add' && 'active-button'}`}>Add Items</h3>

                        </div>
                    </>
                }

            </div>



            {isAuthenticated === true &&
                <div className="admin-content">
                    <Outlet />
                </div>
            }

            {isAuthenticated === false &&

                <div className="admin-login-form">
                    <h1 className="center-aligned-text">Admin Login</h1>
                    <h1>{email}</h1>
                    <h1>{password}</h1>
                    <div className="form-row">
                        <h2>email</h2>
                        <input type="text" value={email}
                            onChange={(event) => {
                                setEmail(event.target.value);
                            }}
                        />
                    </div>

                    <div className="form-row ">
                        <h2>password</h2>
                        <input type="password" value={password}
                            onChange={(event) => {
                                setPassword(event.target.value);
                            }}
                        />
                    </div>

                    <div className="form-row">
                        <button onClick={handleLogin}>Login</button>
                    </div>


                </div>
            }





        </>
    )
}

export default AdminPage;