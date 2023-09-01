import './App.css';
import { Link, Outlet } from 'react-router-dom';
import 'normalize.css';
import { useState } from 'react';

function App() {
  const [total, setTotal] = useState(0);

  return (
    <>
      <div className="header">
        <Link to='/'>Logo</Link>
        <ul className="sets">
          <li>
            <Link to='shop/woe'>Wilds of Eldraine</Link>
          </li>
          <li>
            <Link to='shop/cmm'>Commander Masters</Link>
          </li>
          <li>
            <Link to='shop/ltr'>Lord of the Rings</Link>
          </li>
        </ul>
        <div>Cart ({total})</div>
      </div>
      <div>
        <Outlet context={[total, setTotal]} />
      </div>
    </>
  );
}

export default App;
