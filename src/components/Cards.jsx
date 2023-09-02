import './Cards.css'
import Quantity from './Quantity';
import { useLoaderData } from 'react-router-dom';

export default function Cards({ total, setTotal, cart, setCart }) {
  const shopData = useLoaderData();
  const cards = shopData.map((card) => (
    <div key={card.id} className='card-container'>
      <img className="card" src={card.image_uris.normal} alt={card.name} />
      <Quantity
        card={card}
        total={total}
        setTotal={setTotal}
        cart={cart}
        setCart={setCart}

      />
    </div>
  ));

  return <div className="cards">{cards}</div>
}