import './styles/App.css';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import HomePage from './pages/HomePage.js';
import CategoryListingPage from './pages/CategoryListingPage.js';
import ItemDescriptionPage from './pages/ItemDescriptionPage.js';
import ConfirmOrderPage from './pages/ConfirmOrderPage.js';
import { BrowserRouter, Routes, Route } from 'react-router';


function App() {
  return (
    <>

      <BrowserRouter>
        <Navbar />

        <Routes>

          <Route path="/" element={<HomePage />} />


          <Route path="/category/:items" element={<CategoryListingPage />} />

          <Route path="/category/:items/:id" element={<ItemDescriptionPage />} />

          <Route path="/confirm-order" element={<ConfirmOrderPage />} />


        </Routes>


      </BrowserRouter>




      <Footer />





    </>
  )
}

export default App;