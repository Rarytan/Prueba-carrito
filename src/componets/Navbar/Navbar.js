import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import { Link } from "react-router-dom";

import Total from "../carrito/total";
import "./Navbar.css";

const Navbar = () => {
    const { cart } = useContext(dataContext);
    return (
    <div className="nav-container">
        <nav className="navbar">
            <Link to={"/"}>
            <h1 className="navbar-logo">360 E-Commerce</h1>
            </Link>
            
            <Link className="seeCarrito" to={"/carrito"}>🛒 
            {cart.length > 0 ? <Total /> : null}
            </Link>
        </nav>
    </div>
    );
};

export default Navbar;