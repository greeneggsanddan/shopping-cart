import Cards from './Cards';
import './Shop.css';
import Filter from './Filter';
import { useOutletContext } from 'react-router-dom';

export default function Shop() {
  const [total, setTotal] = useOutletContext();

  return (
    <div className="shop-container">
      <Filter />
      <Cards
        total={total}
        setTotal={setTotal}
      />
    </div>
  );
}
