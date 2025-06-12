import './styles/App.css';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import HomePage from './pages/HomePage.js';
import CategoryListingPage from './pages/CategoryListingPage.js';
import ItemDescriptionPage from './pages/ItemDescriptionPage.js';
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


        </Routes>


      </BrowserRouter>



      {/* <div className="button-layout button-transparent-background button-white-border">
        <div className="button-background-container button-white-background"></div>
        <p className="button-text white-text">hello</p>
      </div>


      <div className="button-layout button-transparent-background button-gray-border">
        <div className="button-background-container button-gray-background"></div>
        <p className="button-text dark-gray-text">hello</p>
      </div> */}

      <Footer />





    </>
  )
}

export default App;