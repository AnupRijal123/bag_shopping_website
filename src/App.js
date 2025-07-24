import './styles/App.css';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import HomePage from './pages/HomePage.js';
import CategoryListingPage from './pages/CategoryListingPage.js';
import ItemDescriptionPage from './pages/ItemDescriptionPage.js';
import ConfirmOrderPage from './pages/ConfirmOrderPage.js';
import SalePage from './pages/SalePage.js';
import AdminPage from './pages/AdminPage.js';
import AdminViewOrders from './components/AdminViewOrders.js';
import AdminAddItems from './components/AdminAddItems.js';
import { Routes, Route, useLocation } from 'react-router';
import { useEffect } from 'react';


function App() {

  const location = useLocation();

  let isAdminRoute = location.pathname.startsWith('/admin');

  useEffect(() => {

    //disable zoom and pinch in mobile and tablets
    function handleGestureStart(e) {
      e.preventDefault();
    }

    document.addEventListener('gesturestart', handleGestureStart)

    return () => {
      document.removeEventListener('gesturestart', handleGestureStart)
    }

  }, []);


  return (
    <>

      {isAdminRoute === false && <Navbar />}


      <Routes>

        <Route path="/" element={<HomePage />} />


        <Route path="/category/:items" element={<CategoryListingPage />} />

        <Route path="/category/:items/:id" element={<ItemDescriptionPage />} />

        <Route path="/confirm-order" element={<ConfirmOrderPage />} />
        <Route path="/sale" element={<SalePage />} />


        <Route path="/admin/*" element={<AdminPage />}>

          <Route path="orders" element={<AdminViewOrders />} />

          <Route path="add" element={<AdminAddItems />} />


        </Route>


      </Routes>


      {isAdminRoute === false && <Footer />}


    </>
  )
}

export default App;