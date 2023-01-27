import './CartPage.css';
import LineItem from '../../components/LineItem/LineItem';
import * as ordersAPI from '../../utilities/orders-api';
import { useNavigate } from 'react-router-dom';

export default function Cart({ order, setCart }) {

  const navigate = useNavigate();
  let lineItems = []

  if (!order) return lineItems;

  async function handleChangeQty(productId, newQty) {
    const updatedCart = await ordersAPI.setProductQtyInCart(productId, newQty);
    setCart(updatedCart);
  }

  async function handleCheckout() {
    await ordersAPI.checkout();
    navigate('/orders');
  }

  if (order) {
    lineItems = order.lineItems.map(item =>
      <LineItem
        lineItem={item}
        isPaid={order.isPaid}
        handleChangeQty={handleChangeQty}
        key={item._id}
      />
    );
  } else {
    lineItems = null
  }


  return (
    <div className="OrderDetail">
      <h1>Cart</h1>

      <div className="section-heading">

        {order.isPaid ?
          <span>ORDER <span className="smaller">{order.orderId}</span></span>
          :
          <span>NEW ORDER</span>
        }
        <span>{new Date(order.updatedAt).toLocaleDateString()}</span>
      </div>

      <div className="line-item-container flex-ctr-ctr flex-col scroll-y">
        {(lineItems) ?
          <>
            {lineItems}
            <section className="total">
              {order.isPaid ?
                <span className="right">TOTAL&nbsp;&nbsp;</span>
                :
                <button
                  className="btn-sm"
                  onClick={handleCheckout}
                  disabled={!lineItems.length}
                >CHECKOUT</button>
              }
              <span>{order.totalQty}</span>
              <span className="right">${order.orderTotal.toFixed(2)}</span>
            </section>
          </>
          :
          <div className="empty-cart">Cart is Empty!</div>
        }
      </div>
    </div>
  );
}