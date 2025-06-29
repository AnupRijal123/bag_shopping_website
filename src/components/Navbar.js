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



                        <p onClick={() => { goToCategoryPage('backpack') }} className="white-text cursor-pointer scale-hover">backpacks</p>
                        <p onClick={() => { goToCategoryPage('handbag') }} className="white-text cursor-pointer scale-hover">handbags</p>
                        <p onClick={() => { goToCategoryPage('ladies') }} className="white-text cursor-pointer scale-hover">ladies bags</p>

                        <div className="navbar-item-dropdown-container">
                            <p className="white-text cursor-pointer scale-hover">others</p>
                            <div className="navbar-item-dropdown">
                                <p onClick={() => { goToCategoryPage('school') }} className="white-text scale-hover cursor-pointer">school bags</p>
                                <p onClick={() => { goToCategoryPage('college') }} className="white-text scale-hover cursor-pointer">college bags</p>
                                <p onClick={() => { goToCategoryPage('office') }} className="white-text scale-hover cursor-pointer">office bags</p>
                                <p onClick={() => { goToCategoryPage('shopping') }} className="white-text scale-hover cursor-pointer">shopping bags</p>
                                <p onClick={() => { goToCategoryPage('guitar') }} className="white-text scale-hover cursor-pointer">guitar bags</p>
                                <p onClick={() => { goToCategoryPage('gym') }} className="white-text scale-hover cursor-pointer">gym bags</p>
                                <p onClick={() => { goToCategoryPage('delivery') }} className="white-text scale-hover cursor-pointer">delivery bags</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <Cart cartClicked={isCartClicked} closeCart={handleCartClose} />


        </>
    )
}

export default Navbar;