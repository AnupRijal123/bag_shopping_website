import '../styles/AdminPage.css';
import { useNavigate, Outlet } from 'react-router';


function AdminPage() {

    const navigate = useNavigate();
    return (
        <>
            <div className="admin-navbar">
                <h1>Bulbul Bags Admin Panel</h1>
                <div className="admin-button-container">
                    <h3 onClick={() => {
                        navigate('/admin/orders');
                    }}
                        className="admin-nav-link-text">View Orders</h3>

                    <h3 onClick={() => {
                        navigate('/admin/add');
                    }}
                        className="admin-nav-link-text">Add Items</h3>

                </div>
            </div>

            <div className="admin-content">

                <Outlet />




            </div>
        </>
    )
}

export default AdminPage;