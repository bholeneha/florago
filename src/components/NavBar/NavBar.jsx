import "./NavBar.css";
import { Link } from "react-router-dom";
import * as userService from '../../utilities/users-service';
import { useContext } from 'react';
import { CartContext } from '../../pages/App/App';

export default function NavBar({ user, setUser }) {
    const cart = useContext(CartContext);


    function handleLogOut() {
        userService.logOut()
        setUser(null)
    }

    return (
        <div className="Nav-Bar">
            <nav className="Nav-Links" >
                <div className="ShopName">
                    <h1>Leaf It To Me</h1>
                    <h6>For all your plant wants and needs</h6>
                </div>
                <Link className="Nav-Link" to="/">home</Link>
                <Link className="Nav-Link" to="/shop">shop</Link>
                <Link className="Nav-Link" to="/learn">learn</Link>
                {user ?
                    <>
                        <h1>Hi, {user.name}!</h1>
                        <Link className="Nav-Link" to="/profile">profile</Link>
                        <Link className="Nav-Link" to="/logout" onClick={handleLogOut}>log out</Link>
                    </>
                    :
                    <Link className="Nav-Link" to="/login">log in</Link>
                }
                <Link className="Nav-Link" to="/cart">cart({cart?.totalQty})</Link>
            </nav>
        </div>
    );
}