import '../styles/AdminPage.css';
import { useNavigate, useLocation, Outlet } from 'react-router';


function AdminPage() {

    const navigate = useNavigate();
    const location = useLocation();

    const activeRouteArray = location.pathname.split("/admin/");

    let activeRoute = activeRouteArray[1];
    return (
        <>
            <div className="admin-navbar">
                <h1>Bulbul Bags Admin Panel</h1>
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
            </div>

            <div className="admin-content">

                <Outlet />




            </div>
        </>
    )
}

export default AdminPage;