import '../styles/Navbar.css';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router';
import Cart from './Cart.js';

function Navbar() {

    const [isScreenScrolled, setIsScreenScrolled] = useState(false);

    const navigate = useNavigate();

    const [isCartClicked, setIsCartClicked] = useState(false);
    const location = useLocation();

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
            <div className={`navbar ${isScreenScrolled === true && 'coloured-navbar'} ${location.pathname !== '/' && 'coloured-navbar'}`}>
                <div className="navbar-first-row">
                    <img className="brand-logo" src={require('../assets/logos/bulbul.png')} alt="logo" />
                    <div className="navbar-first-row-items">
                        <p onClick={goToHome} className="cursor-pointer scale-hover navbar-text">Home</p>
                        <p onClick={handleCartClick} className=" cursor-pointer scale-hover navbar-text">Cart</p>
                    </div>
                </div>
                <div className="navbar-second-row">
                    <div className="navbar-second-row-items-contanier">


                        <p onClick={() => {
                            navigate('/sale');
                        }} className=" cursor-pointer scale-hover navbar-text">sale</p>

                        <p onClick={() => { goToCategoryPage('backpack') }} className=" cursor-pointer scale-hover navbar-text">backpacks</p>
                        <p onClick={() => { goToCategoryPage('handbag') }} className=" cursor-pointer scale-hover navbar-text">handbags</p>
                        <p onClick={() => { goToCategoryPage('ladies') }} className=" cursor-pointer scale-hover navbar-text">ladies</p>

                        <div className="navbar-item-dropdown-container">
                            <p className=" cursor-pointer scale-hover navbar-text">more</p>
                            <div className="navbar-item-dropdown">
                                <p onClick={() => { goToCategoryPage('bulbul') }} className="navbar-dropdown-text scale-hover cursor-pointer">bulbul bags</p>
                                <p onClick={() => { goToCategoryPage('school') }} className="navbar-dropdown-text scale-hover cursor-pointer">school bags</p>
                                <p onClick={() => { goToCategoryPage('college') }} className="navbar-dropdown-text scale-hover cursor-pointer">college bags</p>
                                <p onClick={() => { goToCategoryPage('laptop') }} className="navbar-dropdown-text scale-hover cursor-pointer">laptop bags</p>
                                <p onClick={() => { goToCategoryPage('office') }} className="navbar-dropdown-text scale-hover cursor-pointer">office bags</p>
                                <p onClick={() => { goToCategoryPage('shopping') }} className="navbar-dropdown-text scale-hover cursor-pointer">shopping bags</p>
                                <p onClick={() => { goToCategoryPage('guitar') }} className="navbar-dropdown-text scale-hover cursor-pointer">guitar bags</p>
                                <p onClick={() => { goToCategoryPage('travel') }} className="navbar-dropdown-text scale-hover cursor-pointer">travel bags</p>
                                <p onClick={() => { goToCategoryPage('gym') }} className="navbar-dropdown-text scale-hover cursor-pointer">gym bags</p>
                                <p onClick={() => { goToCategoryPage('delivery') }} className="navbar-dropdown-text scale-hover cursor-pointer">delivery bags</p>
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