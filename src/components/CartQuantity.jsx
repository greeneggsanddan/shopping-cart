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

    if (newQuantity === 99) return;

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
    <>
      <button type="button" onClick={subtractItem}>
        -
      </button>
      <p>{item.quantity}</p>
      <button type="button" onClick={addItem}>
        +
      </button>
    </>
  );
}
