import { useOutletContext, useParams } from 'react-router-dom';
import DefaultPage from './DefaultPage';
import Shop from './Shop';
import './Filter.css';

export default function Filter() {
  const { set } = useParams();
  const [shop_1, shop_2, shop_3] = useOutletContext();

  return (
    <div className="container">
      <div className="sidebar">Search here</div>
      <div className="cards">
        {set === 'woe' ? (
          <Shop shopData={shop_1} />
        ) : set === 'cmm' ? (
          <Shop shopData={shop_2} />
        ) : set === 'ltr' ? (
          <Shop shopData={shop_3} />
        ) : (
          <DefaultPage /> // This doesn't work atm
        )}
      </div>
    </div>
  );
}
