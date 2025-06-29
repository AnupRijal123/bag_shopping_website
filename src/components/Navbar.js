import '../styles/Navbar.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import Cart from './Cart.js';

function Navbar() {

    const [isScreenScrolled, setIsScreenScrolled] = useState(false);

    const navigate = useNavigate();

    const [isCartClicked, setIsCartClicked] = useState(false);

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
        navigate(`/category/${value}`);
    }

    function goToHome() {
        navigate('/');
    }

    function handleCartClick() {
        setIsCartClicked(true);
    }

    function handleCartClose() {
        setIsCartClicked(false);

    }

    return (
        <>
            <div className={`navbar ${isScreenScrolled === true && 'coloured-navbar'}`}>
                <div className="navbar-first-row">
                    <img className="brand-logo" src={require('../assets/logos/bulbul_logo.png')} alt="logo" />
                    <div className="navbar-first-row-items">
                        <p onClick={goToHome} className="white-text cursor-pointer scale-hover">Home</p>
                        <p onClick={handleCartClick} className="white-text cursor-pointer scale-hover">Cart</p>
                    </div>
                </div>
                <div className="navbar-second-row">
                    <div className="navbar-second-row-items-contanier">



                        <p onClick={() => { goToCategoryPage('backpacks') }} className="white-text cursor-pointer scale-hover">backpacks</p>
                        <p onClick={() => { goToCategoryPage('handbags') }} className="white-text cursor-pointer scale-hover">handbags</p>
                        <p onClick={() => { goToCategoryPage('ladies bags') }} className="white-text cursor-pointer scale-hover">ladies bags</p>

                        <div className="navbar-item-dropdown-container">
                            <p className="white-text cursor-pointer scale-hover">others</p>
                            <div className="navbar-item-dropdown">
                                <p className="white-text scale-hover cursor-pointer">school bags</p>
                                <p className="white-text scale-hover cursor-pointer">college bags</p>
                                <p className="white-text scale-hover cursor-pointer">office bags</p>
                                <p className="white-text scale-hover cursor-pointer">shopping bags</p>
                                <p className="white-text scale-hover cursor-pointer">guitar bags</p>
                                <p className="white-text scale-hover cursor-pointer">gym bags</p>
                                <p className="white-text scale-hover cursor-pointer">delivery bags</p>
                            </div>
                        </div>
                        <p onClick={() => { goToCategoryPage('sale') }} className="white-text cursor-pointer scale-hover">sale</p>
                    </div>
                </div>
            </div>


            <Cart cartClicked={isCartClicked} closeCart={handleCartClose} />


        </>
    )
}

export default Navbar;