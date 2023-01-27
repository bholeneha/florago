import './LineItem.css';

export default function LineItem({ lineItem, isPaid, handleChangeQty }) {
  console.log(`This is line item`)
  console.log(lineItem)
  return (
    <tr className="LineItem">
      <td><span>{lineItem.product.name}</span></td>
      <td><span>{lineItem.product.price.toFixed(2)}</span></td>
      <td>
        <div className="qty" style={{ justifyContent: isPaid && 'center' }}>
          {!isPaid &&
            <button
              onClick={() => handleChangeQty(lineItem.product._id, lineItem.qty - 1)}
            >−</button>
          }
          <span>{lineItem.qty}</span>
          {!isPaid &&
            <button
              onClick={() => handleChangeQty(lineItem.product._id, lineItem.qty + 1)}
            >+</button>
          }
        </div>
      </td>
      <td>
        <div className="ext-price">${lineItem.extPrice.toFixed(2)}</div>
      </td>
    </tr>
  );
}