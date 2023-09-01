import { useState } from 'react';
import './Quantity.css';

export default function Quantity() {
  const [quantity, setQuantity] = useState(1);

  function subtractQuantity() {
    if (quantity > 1) setQuantity(quantity - 1);
  }

  function addQuantity() {
    if (quantity < 99) setQuantity(quantity + 1);
  }

  function handleInput(e) {
    setQuantity(parseInt(e.target.value, 10));
  }

  return (
    <div className="input-container">
      <button type="button" onClick={subtractQuantity}>
        -
      </button>
      <input
        className="quantity"
        type="number"
        min="1"
        max="99"
        value={quantity}
        onChange={handleInput}
      />
      <button type="button" onClick={addQuantity}>
        +
      </button>
      <button type="submit">ADD TO CART</button>
    </div>
  );
}
