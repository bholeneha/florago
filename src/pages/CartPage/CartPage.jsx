import './CartPage.css';
import LineItem from '../../components/LineItem/LineItem';
import * as ordersAPI from '../../utilities/orders-api';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../App/App';


export default function Cart({ setCart }) {
  const cart = useContext(CartContext);

  console.log('lalaa')
  console.log(cart)

  const navigate = useNavigate();

  async function handleChangeQty(productId, newQty) {
    const updatedCart = await ordersAPI.setProductQtyInCart(productId, newQty, cart.id);
    setCart(updatedCart);
  }

  async function handleCheckout() {
    await ordersAPI.checkout();
    navigate('/orders');
  }

  const lineItems = cart.lineItems.map(product =>
    <LineItem
      lineItem={product}
      isPaid={cart.isPaid}
      handleChangeQty={handleChangeQty}
      key={product._id}
    />
  )

  return (
    <div className="OrderDetail">
      <h1>Cart</h1>

      <div className="section-heading">
        {cart.lineItems.length ?
          <>
            <span>ORDER NUMBER: <span className="smaller">{cart.orderId}</span></span>
            <span>{new Date(cart.updatedAt).toLocaleDateString()}</span>
          </>
          :
          <h2>Cart is Empty</h2>
        }
      </div>

      <div className="LineItems">
        {lineItems.length ?
          <>
            <table>
              <th>
                <td>Item</td>
                <td>Price</td>
                <td>Quantity</td>
                <td>Total</td>
              </th>
              {lineItems}

              <section className="total">
                <span className="right">TOTAL&nbsp;&nbsp;</span>
                :
                {/* <span>{cart.totalQty}</span> */}
                <span className="right">${cart.orderTotal.toFixed(2)}</span>
              </section>
            </table>
            <button
              className="btn-sm"
              onClick={handleCheckout}
              disabled={!lineItems.length}
            >CHECKOUT</button>
          </>

          :
          <div className="empty-cart">Checkout Our Plant Shop!</div>
        }
      </div>
    </div>
  );
}