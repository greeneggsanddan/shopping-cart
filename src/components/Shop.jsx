import Cards from './Cards';
import './Shop.css';
import Filter from './Filter';
import { useOutletContext } from 'react-router-dom';

export default function Shop() {
  const [total, setTotal, cart, setCart] = useOutletContext();

  return (
    <div className="shop-container">
      <Filter />
      <Cards
        total={total}
        setTotal={setTotal}
        cart={cart}
        setCart={setCart}
      />
    </div>
  );
}
