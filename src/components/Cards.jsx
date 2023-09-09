import './Cards.css';
import Quantity from './Quantity';
import { useLoaderData } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Cards({
  cart,
  setCart,
  color,
  manaValue,
  type,
  rarity,
  query,
}) {
  const shopData = useLoaderData();

  function filterCards(data, query) {
    query = query.toLowerCase();
    return data.filter((card) =>
      card.name.split(' ').some((word) => word.toLowerCase().startsWith(query))
    );
  }

  const filteredCards = filterCards(shopData, query);

  const cards = filteredCards.map((card) => {
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
        <Quantity card={card} cart={cart} setCart={setCart} />
      </div>
    );
  });

  // Checks if all cards are filtered out
  const noCards = cards.every((card) => card === null);

  return (
    <>
      <div className="cards">{cards}</div>
      {noCards ? <div className="no-cards">Nothing to see here!</div> : null}
    </>
  );
}

Cards.propTypes = {
  cart: PropTypes.array.isRequired,
  setCart: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  manaValue: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  rarity: PropTypes.string.isRequired,
  query: PropTypes.string.isRequired,
};