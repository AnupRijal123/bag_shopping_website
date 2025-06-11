import '../styles/Navbar.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

function Navbar() {

    const [isScreenScrolled, setIsScreenScrolled] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {

        function handleScroll() {

            if (window.scrollY > 0) {
                setIsScreenScrolled(true);
            } else {
                setIsScreenScrolled(false);
            }
        }

        window.addEventListener('scroll', handleScroll);

        //return inside useEffect will run when this component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }


    }, []);

    function goToCategoryPage(value) {
        console.log('link clicked');
        console.log(value);
        navigate(`/category/${value}`);
    }

    return (
        <div className={`navbar ${isScreenScrolled === true && 'coloured-navbar'}`}>
            <div className="navbar-first-row">
                <h1>Arjun Bags</h1>
                <div>icons</div>
            </div>
            <div className="navbar-second-row">
                <div className="navbar-second-row-items-contanier">
                    <p onClick={() => { goToCategoryPage('backpacks') }} className="white-text cursor-pointer scale-hover">backpacks</p>
                    <p onClick={() => { goToCategoryPage('handbags') }} className="white-text cursor-pointer scale-hover">handbags</p>
                    <p onClick={() => { goToCategoryPage('ladiesbags') }} className="white-text cursor-pointer scale-hover">ladies bags</p>
                    <p onClick={() => { goToCategoryPage('others') }} className="white-text cursor-pointer scale-hover">others</p>
                    <p onClick={() => { goToCategoryPage('sale') }} className="white-text cursor-pointer scale-hover">sale</p>
                </div>
            </div>
        </div>
    )
}

export default Navbar;