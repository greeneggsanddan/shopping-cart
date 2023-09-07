import { useState } from 'react';
import './Quantity.css';

export default function Quantity({ card, cart, setCart }) {
  const [quantity, setQuantity] = useState(1);

  function subtractQuantity() {
    if (quantity > 1) setQuantity(quantity - 1);
  }

  function addQuantity() {
    if (quantity < 99) setQuantity(quantity + 1);
  }

  function handleInput(e) {
    const value = e.target.value;

    // Prevents negative numbers and NaN inputs
    if (!value || value < 1) setQuantity(1);
    else setQuantity(parseInt(value, 10));
  }

  function addToCart(card) {
    // Checks if the card is already in the cart and updates the quantity
    if (cart.some((cardInCart) => cardInCart.id === card.id)) {
      const newCart = cart.map((cardInCart) => {
        if (cardInCart.id === card.id) {
          return {
            ...cardInCart,
            quantity: cardInCart.quantity + quantity,
          };
        } else {
          return cardInCart;
        }
      });
      setCart(newCart);
    } else {
      // Creates a new cart that includes the card and the quantity added
      setCart([...cart, { ...card, quantity: quantity }]);
    }

    setQuantity(1);
  }

  return (
    <form className="quantity-container">
      <div className="price">${(card.prices.usd * quantity).toFixed(2)}</div>
      <div className="quantity-row">
        <div className="quantity-adjuster">
          <button
            className="plus-minus"
            type="button"
            onClick={subtractQuantity}
          >
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
          <button className="plus-minus" type="button" onClick={addQuantity}>
            +
          </button>
        </div>
        <button
          className="add"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            addToCart(card);
          }}
        >
          ADD TO CART
        </button>
      </div>
    </form>
  );
}
