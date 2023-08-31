// import { useState } from 'react';
import './App.css';
import { Link, Outlet } from 'react-router-dom';
import 'normalize.css';

function App() {
  return (
    <>
      <div className="header">
        <div>Logo</div>
        <ul className='sets'>
          <li><Link to={'shop/woe'}>Wilds of Eldraine</Link></li>
          <li><Link to={'shop/cmm'}>Commander Masters</Link></li>
          <li><Link to={'shop/ltr'}>Lord of the Rings</Link></li>
        </ul>
        <div>Cart</div>
      </div>
      <div className="shops">
        <Outlet />
      </div>
    </>
  );
}

export default App;
