import "./NavBar.scss";
import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";
import { useContext } from "react";
import { CartContext } from "../../pages/App/App";

export default function NavBar({ user, setUser }) {
  const cart = useContext(CartContext);

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <div className="Nav-Bar">
      <nav className="Nav-Links">
        <Link className="Nav-Link" to="/">
          Home
        </Link>
        <Link className="Nav-Link" to="/shop">
          Shop
        </Link>
        <Link className="Nav-Link" to="/learn">
          Learn
        </Link>
        {user ? (
          <>
            <h1>Hi, {user.name}!</h1>
            <Link className="Nav-Link" to="/profile">
              Profile
            </Link>
            <Link className="Nav-Link" to="/logout" onClick={handleLogOut}>
              Log Out
            </Link>
          </>
        ) : (
          <Link className="Nav-Link" to="/login">
            Log In
          </Link>
        )}
        <Link className="Nav-Link" to="/cart">
          Cart({cart?.totalQty})
        </Link>
      </nav>
    </div>
  );
}
