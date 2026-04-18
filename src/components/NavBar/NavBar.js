import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.scss";

const NavBar = () => {
    return (
        <nav className="navbar">
            <h3 className="navbar__brand">TechShop</h3>
            <div className="navbar__actions">
                <button className="navbar__button">Inicio</button>
                <button className="navbar__button">Productos</button>
                <CartWidget />
            </div>
        </nav>
    );
};

export default NavBar;