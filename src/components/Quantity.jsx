import { useState } from 'react';
import './Quantity.css';

export default function Quantity({ card, total, setTotal, cart, setCart}) {
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

  function addToCart(card) {
    setTotal(total + quantity);

    // Checks if the card is already in the cart and updates the quantity
    if (cart.some(cardInCart => cardInCart.id === card.id)) {
      const newCart = cart.map(cardInCart => {
        if (cardInCart.id === card.id) {
          return {
            ...cardInCart,
            quantity: cardInCart.quantity + quantity,
          };
        } else {
          return cardInCart;
        }
      })
      setCart(newCart);
    } else {
      // Creates a new cart that includes the card and the quantity added
      setCart([
        ...cart,
        { ...card, quantity: quantity }
      ]);
    }

    setQuantity(1);
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
      <button type="submit" onClick={() => addToCart(card)}>Add to cart</button>
    </div>
  );
}
