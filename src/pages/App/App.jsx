import './App.css';
import { useState, useEffect, createContext } from 'react';
import { Routes, Route, Navigate } from "react-router-dom"
import AuthPage from '../AuthPage/AuthPage';
import HomePage from '../HomePage/HomePage';
import ShopPage from '../ShopPage/ShopPage';
import CartPage from '../CartPage/CartPage'
import ProfilePage from '../ProfilePage/ProfilePage';
// import LearnPage from '../LearnPage/LearnPage';
import NavBar from '../../components/NavBar/NavBar'
import * as ordersAPI from '../../utilities/orders-api';
import { getUser } from '../../utilities/users-service'

export const CartContext = createContext();

function App() {
  const [user, setUser] = useState(getUser())
  const [cart, setCart] = useState(null);

  useEffect(function () {
    async function getCart() {
      const order = await ordersAPI.getCart();
      console.log(order)
      setCart(order);
    }
    getCart();
  }, []);

  console.log(cart)

  return (
    <CartContext.Provider value={cart}>
      <div className="App">
        <header className="Header">
          <NavBar user={user} setUser={setUser} />
        </header>
        <main className="Main">
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage setCart={setCart} />} />
            {/* <Route path="/learn" element={<LearnPage />} /> */}
            <Route path="/signup" element={<AuthPage setUser={setUser} />} />
            <Route path="/login" element={<AuthPage setUser={setUser} />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/cart" element={<CartPage setCart={setCart} />} />
            <Route path="/*" element={<Navigate to="/home" />} />
          </Routes>
        </main>
        <footer className="Footer">
          <p>Be the first to know about new arrivals</p>
          <form>
            <input type="text" placeholder="Email"></input>
            <button type="submit"><span>Subscribe</span></button>
          </form>
          <div className="SocialMediaIcons"></div>
          <p> Copyright, Leaf It To Me Plant Shop</p>
        </footer>
      </div>
    </CartContext.Provider>
  );
}

export default App;
