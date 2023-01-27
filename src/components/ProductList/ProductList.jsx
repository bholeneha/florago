import './ProductList.css';
import ProductListItem from '../ProductListItem/ProductListItem';

export default function ProductList({ products, handleAddToOrder }) {
  // console.log('This')
  // console.log(products)

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