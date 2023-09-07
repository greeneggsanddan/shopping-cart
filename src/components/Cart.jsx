import { useOutletContext } from 'react-router-dom';
import CartQuantity from './CartQuantity';
import './Cart.css';

export default function Cart() {
  const [cart, setCart] = useOutletContext();

  const items = cart.map((item) => (
    <div key={item.id} className="item">
      <img className="cartCard" src={item.image_uris.small} alt={item.name} />
      <div>
        <h3>{item.name}</h3>
        <p>{item.set_name}</p>
      </div>
      <p>${item.prices.usd}</p>
      <CartQuantity cart={cart} setCart={setCart} item={item} />
      <p>${(item.prices.usd * item.quantity).toFixed(2)}</p>
    </div>
  ));

  return (
    <>
      <div className="cart-container">
        <h1>Your Cart</h1>
        <div className="cart">{items}</div>
        {cart.length === 0 ? (
          <div className="empty">Your cart is empty.</div>
        ) : null}
      </div>
      <button className="checkout"></button>
    </>
  );
}
