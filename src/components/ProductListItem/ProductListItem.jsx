import './ProductListItem.css';

export default function ProductListItem({ product, handleAddToOrder }) {
  // console.log(product)
  return (
    <div className="ProductListItem">
      <div>
        <div>
          <img src="https://unsplash.com/photos/ywRYbp-6p8c" />
        </div>
        <div className="buy">
          <span>${product.price.toFixed(2)}</span>
          <button className="btn-sm" onClick={() => handleAddToOrder(product._id)}>
            <span>add to cart</span>
          </button>
        </div>
      </div>
      <div className="name">{product.name}</div>
    </div>
  );
}