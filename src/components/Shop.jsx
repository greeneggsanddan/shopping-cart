import './Shop.css'
import Quantity from './Quantity';

export default function Shop({ shopData }) {
  const cards = shopData.map((card) => (
    <div key={card.id} className='card-container'>
      <img className="card" src={card.image_uris.normal} alt={card.name} />
      <Quantity />
    </div>
  ));

  return <div className="shop">{cards}</div>
}