import { useParams } from 'react-router-dom';
import DefaultPage from './DefaultPage';
import Woe from './Woe';
import Cmm from './Cmm';
import Ltr from './Ltr';
import './Filter.css';

export default function Filter() {
  const { set } = useParams();

  return (
    <div className="container">
      <div className="sidebar">Search here</div>
      <div className="cards">
        {set === 'woe' ? (
          <Woe />
        ) : set === 'cmm' ? (
          <Cmm />
        ) : set === 'ltr' ? (
          <Ltr />
        ) : (
          <DefaultPage />
        )}
      </div>
    </div>
  );
}
