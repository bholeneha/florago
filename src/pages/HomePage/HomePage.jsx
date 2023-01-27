import './HomePage.css'
import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <>
            <div className="HomeBanner">
                <h1>For All Your Plants Needs & Wants</h1>
                <Link className="Nav-Link" to="/shop">Explore Shop</Link>
                <Link className="Nav-Link" to="/learn">Learn</Link>
            </div>
            <div className="HomeImage">
                <p>Nice Indoor Plant Image Here</p>
            </div>
            <div className="HomeCategories">
                <h1>Shop Categories</h1>
            </div>

            <div className="HomeAbout">
                <h1>Banner</h1>
                <Link className="Nav-Link" to="/home">Contact Us</Link>
            </div>
        </>
    )
}