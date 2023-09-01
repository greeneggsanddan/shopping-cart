import './Quantity.css'

export default function Quantity() {
  return (
    <div className='input-container'>
      <button type="button">-</button>
      <input className='quantity' type="number" value="1" />
      <button type="button">+</button>
      <button type="submit">ADD TO CART</button>
    </div>
  );
}
