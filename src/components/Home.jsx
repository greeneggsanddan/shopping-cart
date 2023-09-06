import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <div className="home">
      <div className="hero"></div>
      <div className="overlay">
        Wilds of Eldraine out now!
        <Link to={'shop/woe'}>
          <button className="shop-here" type="button">
            SHOP HERE
          </button>
        </Link>
      </div>
    </div>
  );
}
