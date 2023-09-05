import './App.css';
import { Link, Outlet } from 'react-router-dom';
import 'normalize.css';
import { useState } from 'react';
import woeSymbol from './assets/woe.svg';
import cmmSymbol from './assets/cmm.svg';
import ltrSymbol from './assets/ltr.svg';

export default function App() {
  const [total, setTotal] = useState(0);
  const [cart, setCart] = useState([]);

  function displayTotal() {

  }

  return (
    <>
      <div className="header">
        <Link className="logo" to="/">
          CARDCASE
        </Link>
        <ul className="sets">
          <li>
            <Link className="set-container" to="shop/woe">
              <img className="symbol" src={woeSymbol} alt="" />
              Wilds of Eldraine
            </Link>
          </li>
          <li>
            <Link className="set-container" to="shop/cmm">
              <img className="symbol" src={cmmSymbol} alt="" />
              Commander Masters
            </Link>
          </li>
          <li>
            <Link className="set-container" to="shop/ltr">
              <img className="symbol" src={ltrSymbol} alt="" />
              Lord of the Rings
            </Link>
          </li>
        </ul>
        <Link to="cart">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="32"
            viewBox="0 -960 960 960"
            width="32"
          >
            <path d="M226.666-80q-27 0-46.833-19.833T160-146.666v-506.668q0-27 19.833-46.833T226.666-720h100.001v-6.667q0-64 44.666-108.666Q416-880 480-880t108.667 44.667q44.666 44.666 44.666 108.666V-720h100.001q27 0 46.833 19.833T800-653.334v506.668q0 27-19.833 46.833T733.334-80H226.666Zm0-66.666h506.668v-506.668H633.333v86.667q0 14.167-9.617 23.75t-23.833 9.583q-14.216 0-23.716-9.583-9.5-9.583-9.5-23.75v-86.667H393.333v86.667q0 14.167-9.617 23.75t-23.833 9.583q-14.216 0-23.716-9.583-9.5-9.583-9.5-23.75v-86.667H226.666v506.668ZM393.333-720h173.334v-6.667q0-36.333-25.167-61.5T480-813.334q-36.333 0-61.5 25.167t-25.167 61.5V-720ZM226.666-146.666v-506.668 506.668Z" />
          </svg>
          {cart.length}
        </Link>
      </div>
      <div>
        <Outlet context={[total, setTotal, cart, setCart]} />
      </div>
    </>
  );
}
