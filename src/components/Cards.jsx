import './Cards.css';
import Quantity from './Quantity';
import { useLoaderData } from 'react-router-dom';

export default function Cards({
  total,
  setTotal,
  cart,
  setCart,
  color,
  manaValue,
  type,
  rarity,
}) {
  let shopData = useLoaderData();

  const cards = shopData.map((card) => {
    const cardColors = card.colors.length === 0 ? ['C'] : card.colors;
    const cmc = card.cmc >= 7 ? 7 : card.cmc;
    const cardTypes = card.type_line.split(' ');

    // Filter logic
    if (
      (color !== null && !cardColors.includes(color)) ||
      (manaValue !== null && cmc !== manaValue) ||
      (type !== null && !cardTypes.includes(type)) ||
      (rarity !== null && card.rarity !== rarity)
    )
      return null;

    return (
      <div key={card.id} className="card-container">
        <img className="card" src={card.image_uris.normal} alt={card.name} />
        <Quantity
          card={card}
          total={total}
          setTotal={setTotal}
          cart={cart}
          setCart={setCart}
        />
      </div>
    );
  });

  return <div className="cards">{cards}</div>;
}
