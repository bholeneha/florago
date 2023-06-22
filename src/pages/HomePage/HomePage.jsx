import "./HomePage.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Leafy } from "../../assets/leafy.svg";

export default function HomePage() {
  return (
    <div className="Home">
      {/* Banner Section */}
      <div className="Home-Banner">
        <div className="Card">
          <div>
            <Leafy />
          </div>
          <h2>Cultivate With Confidence!</h2>
          <h1>From Our Greenhouse To Your Home</h1>
          <h3>SHOP. LEARN. THRIVE.</h3>

          <div className="Card-Buttons">
            <Link className="Nav-Link" to="/shop">
              <button>SHOP</button>
            </Link>

            <Link className="Nav-Link" to="/learn">
              <button>LEARN</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Image */}
      <div className="Home-Image">
        {/* <p>Nice Indoor Plant Image Here</p> */}
      </div>

      {/* Categories Section */}
      <div className="Home-Categories">
        <h1>Shop Categories</h1>
        <div className="Home-Categories-Cards">
          <div className="Home-Category-Card">Category 1</div>
          <div className="Home-Category-Card">Category 2</div>
          <div className="Home-Category-Card">Category 3</div>
        </div>
      </div>

      {/* About Section */}
      <div className="Home-About">
        <div>
          <h1>About Us</h1>
          <p>
            At Flora Go, we're passionate about plants and bringing nature's
            beauty into your life. With our carefully curated selection, we
            transform your spaces into serene and refreshing environments.
            Discover the highest quality plants, expert advice, and a vibrant
            community of plant enthusiasts. Join us in embracing the beauty of
            plants and creating a lush, thriving environment in your home or
            office. Visit our green oasis today.
          </p>
          <Link className="Nav-Link" to="/about">
            <button>READ MORE</button>
          </Link>
        </div>

        <div>
          <div>Image 1</div>
          <div>Image 2</div>
        </div>
      </div>
    </div>
  );
}
