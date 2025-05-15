import './styles/App.css';
import Navbar from './components/Navbar.js';
import Banner from './components/Banner.js'
import CardSection from './components/CardSection.js';

function App() {
  return (
    <>
      <Navbar />
      <Banner />

      <div className="section-container">
        <CardSection />
      </div>

    </>
  )
}

export default App;