
import "./NavBar.css";
import { Link } from "react-router-dom";

export default function NavBar({ user, setUser }) {
    return (
        <div className="Nav-Bar">
            <nav className="Nav-Links" >
                <div className="ShopName">
                    <h1>Leaf It To Me</h1>
                    <h6>For all your plant wants and needs</h6>
                </div>
                <Link className="Nav-Link" to="/">HOME</Link>
                <Link className="Nav-Link" to="/shop">SHOP</Link>
                <Link className="Nav-Link" to="/learn">LEARN</Link>
                {user ?
                    <>
                        <h1>Welcome, {user}!</h1>
                        <Link className="Nav-Link" to="/logout">LOG OUT</Link>
                    </>
                    :
                    <Link className="Nav-Link" to="/login">LOG IN</Link>
                }
                <Link className="Nav-Link" to="/cart">CART</Link>
            </nav>
        </div>
    );
}