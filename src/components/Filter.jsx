import Shop from './Shop';
import './Filter.css';

export default function Filter() {

  return (
    <div className="container">
      <div className="sidebar">Search here</div>
      <div className="cards">
        <Shop />
      </div>
    </div>
  );
}
