import { useOutletContext } from 'react-router-dom';
import CartQuantity from './CartQuantity';
import './Cart.css';

export default function Cart() {
  const [cart, setCart] = useOutletContext();

  const items = cart.map((item) => (
    <tr key={item.id}>
      <td>
        <img
          className="cart-card"
          src={item.image_uris.small}
          alt={item.name}
        />
      </td>
      <td>
        <div className="cart-name">{item.name}</div>
        <div className="cart-set">{item.set_name}</div>
      </td>
      <td>${item.prices.usd}</td>
      <td>
        <CartQuantity cart={cart} setCart={setCart} item={item} />
      </td>
      <td>${(item.prices.usd * item.quantity).toFixed(2)}</td>
      <td>
        <button
          type="button"
          onClick={() => {
            setCart(cart.filter((i) => i.id !== item.id));
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 -960 960 960"
            width="20"
            className='remove-button'
          >
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
          </svg>
        </button>
      </td>
    </tr>
  ));

  const subtotal = cart.reduce(
    (total, item) => total + item.prices.usd * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <div className="empty">Your cart is empty.</div>
      ) : (
        <>
          <table>
            <colgroup>
              <col className="item-col" />
              <col className="description-col" />
              <col className="price-col" />
              <col className="quantity-col" />
              <col className="total-col" />
              <col className="remove-col" />
            </colgroup>
            <tr>
              <th>Item</th>
              <th>Description</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th></th>
            </tr>
            {items}
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td className="subtotal-title">Subtotal:</td>
                <td className="subtotal">${subtotal.toFixed(2)}</td>
                <td></td>
            </tr>
          </table>
          <button className="checkout">PROCEED TO CHECKOUT</button>
        </>
      )}
    </div>
  );
}
