import './ProductList.css';
import ProductListItem from '../ProductListItem/ProductListItem';

export default function ProductList({ products, handleAddToOrder }) {

  const productsCollection = products.map(product =>
    <ProductListItem
      product={product}
      key={product._id}
      handleAddToOrder={handleAddToOrder}
    />
  );

  return (
    <div className="ProductList">
      {productsCollection}
    </div>
  );
}