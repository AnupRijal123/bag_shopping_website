import '../styles/Navbar.css';
import { useState, useEffect } from 'react';

function Navbar() {

    const [isScreenScrolled, setIsScreenScrolled] = useState(false);

    useEffect(() => {
        console.log('mounted');

        function handleScroll() {
            console.log('scrolled');
            console.log(window.scrollY);

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


    return (
        <div className={`navbar ${isScreenScrolled === true && 'coloured-navbar'}`}>
            <div className="navbar-first-row">
                <h1>Arjun Bags</h1>
                <div>icons</div>
            </div>
            <div className="navbar-second-row">
                <div className="navbar-second-row-items-contanier">
                    <p className="white-text cursor-pointer scale-hover">backpacks</p>
                    <p className="white-text cursor-pointer scale-hover">handbags</p>
                    <p className="white-text cursor-pointer scale-hover">others</p>
                    <p className="white-text cursor-pointer scale-hover">sale</p>
                </div>
            </div>
        </div>
    )
}

export default Navbar;