import './styles/App.css';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import HomePage from './pages/HomePage.js';
import CategoryListingPage from './pages/CategoryListingPage.js';
import ItemDescriptionPage from './pages/ItemDescriptionPage.js';
import ConfirmOrderPage from './pages/ConfirmOrderPage.js';
import AdminPage from './pages/AdminPage.js';
import { Routes, Route, useLocation } from 'react-router';


function App() {

  const location = useLocation();

  let isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <>

      {isAdminRoute === false && <Navbar />}


      <Routes>

        <Route path="/" element={<HomePage />} />


        <Route path="/category/:items" element={<CategoryListingPage />} />

        <Route path="/category/:items/:id" element={<ItemDescriptionPage />} />

        <Route path="/confirm-order" element={<ConfirmOrderPage />} />

        <Route path="/admin" element={<AdminPage />} />


      </Routes>


      {isAdminRoute === false && <Footer />}


    </>
  )
}

export default App;