import { useOutletContext } from 'react-router-dom';
import CartQuantity from './CartQuantity';
import './Cart.css'

export default function Cart() {
  const [cart, setCart] = useOutletContext();

  const items = cart.map((item) => (
    <div key={item.id} className="item">
      <img className="cartCard" src={item.image_uris.small} alt={item.name} />
      <h3>{item.name}</h3>
      <p>{item.set_name}</p>
      <p>{item.prices.usd}</p>
      <CartQuantity
        cart={cart}
        setCart={setCart}
        item={item}
      />
      <p>{item.prices.usd * item.quantity}</p>
    </div>
  ));

  return (
    <>
      <h1>Cart</h1>
      <div className="cart">{items}</div>
    </>
  );
}
