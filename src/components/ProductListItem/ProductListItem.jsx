import "./ProductListItem.scss";
import ProductImage from "../../assets/shop2.jpg";

export default function ProductListItem({ product, handleAddToOrder }) {
  return (
    <div className="ProductListItem">
      <div>
        {/* Product Image */}
        <img src={ProductImage} />

        {/* Product Name and Price */}
        <div className="name">{product.name}</div>
        <div>${product.price.toFixed(2)}</div>

        {/* Add To Cart Button */}
        {/* <div className="buy"> */}
        <button onClick={() => handleAddToOrder(product._id)}>
          ADD TO CART
        </button>
        {/* </div> */}
      </div>
    </div>
  );
}
