import Cards from './Cards';
import './Shop.css';
import Filter from './Filter';
import { useOutletContext } from 'react-router-dom';
import { useState } from 'react';

export default function Shop() {
  const [total, setTotal, cart, setCart] = useOutletContext();
  const [color, setColor] = useState(null);
  const [manaValue, setManaValue] = useState(null);
  const [type, setType] = useState(null);
  const [rarity, setRarity] = useState(null);
  const [query, setQuery] = useState('');

  return (
    <div className="shop-container">
      <Filter
        color={color}
        setColor={setColor}
        manaValue={manaValue}
        setManaValue={setManaValue}
        type={type}
        setType={setType}
        rarity={rarity}
        setRarity={setRarity}
        query={query}
        setQuery={setQuery}
        />
      <Cards
        total={total}
        setTotal={setTotal}
        cart={cart}
        setCart={setCart}
        color={color}
        manaValue={manaValue}
        type={type}
        rarity={rarity}
        query={query}
      />
    </div>
  );
}
