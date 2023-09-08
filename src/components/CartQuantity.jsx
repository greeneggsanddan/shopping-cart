import './CartQuantity.css'

export default function CartQuantity({ cart, setCart, item }) {
  function subtractItem() {
    const newQuantity = item.quantity - 1;
    let newCart;

    // Removes the item from the cart if the quantity hits zero, otherwise it decreases the quantity by one
    if (newQuantity === 0) {
      newCart = cart.filter((i) => i.id !== item.id);
    } else {
      newCart = cart.map((i) => {
        if (i.id === item.id) {
          return {
            ...item,
            quantity: newQuantity,
          };
        }
        return i;
      });
    }

    setCart(newCart);
  }

  function addItem() {
    const newQuantity = item.quantity + 1;

    if (newQuantity === 100) return;

    const newCart = cart.map((i) => {
      if (i.id === item.id) {
        return {
          ...item,
          quantity: newQuantity,
        };
      }
      return i;
    });

    setCart(newCart);
  }

  return (
    <div className="cart-quantity-adjuster">
      <button className='cart-plus-minus' type="button" onClick={subtractItem}>
        -
      </button>
      <div className="cart-quantity">{item.quantity}</div>
      <button className="cart-plus-minus" type="button" onClick={addItem}>
        +
      </button>
    </div>
  );
}
