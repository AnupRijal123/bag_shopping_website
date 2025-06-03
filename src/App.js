import './styles/App.css';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import HomePage from './pages/HomePage.js'


function App() {
  return (
    <>
      <Navbar />

      <HomePage />

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