import '../styles/Navbar.css';

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar-first-row">
                <p>facebook logo</p>
                <div>icons</div>
            </div>
            <div className="navbar-second-row">
                <div className="navbar-second-row-items-contanier">
                    <p>shop</p>
                    <p>casual</p>
                    <p>accessories</p>
                    <p>sale</p>

                </div>
            </div>
        </div>
    )
}

export default Navbar;