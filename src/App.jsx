import { useEffect, useState } from 'react';
import './App.css';
import { Link, Outlet } from 'react-router-dom';
import 'normalize.css';
import { SET_ONE, SET_TWO, SET_THREE } from './constants';

function App() {
  const [shop_1, setShop_1] = useState();
  const [shop_2, setShop_2] = useState();
  const [shop_3, setShop_3] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(SET_ONE, { mode: 'cors' });
        let apiData = await response.json();
        let shopData = apiData.data;

        while (apiData.has_more) {
          const nextResponse = await fetch(apiData.next_page, { mode: 'cors' });
          const nextPageData = await nextResponse.json();
          shopData = shopData.concat(nextPageData.data);
          apiData = nextPageData;
        }

        setShop_1(shopData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(SET_TWO, { mode: 'cors' });
        let apiData = await response.json();
        let shopData = apiData.data;

        while (apiData.has_more) {
          const nextResponse = await fetch(apiData.next_page, {
            mode: 'cors',
          });
          const nextPageData = await nextResponse.json();
          shopData = shopData.concat(nextPageData.data);
          apiData = nextPageData;
        }

        setShop_2(shopData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(SET_THREE, { mode: 'cors' });
        let apiData = await response.json();
        let shopData = apiData.data;

        while (apiData.has_more) {
          const nextResponse = await fetch(apiData.next_page, {
            mode: 'cors',
          });
          const nextPageData = await nextResponse.json();
          shopData = shopData.concat(nextPageData.data);
          apiData = nextPageData;
        }

        setShop_3(shopData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

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
        <div>Cart</div>
      </div>
      <div className="shops">
        <Outlet context={[shop_1, shop_2, shop_3]} />
      </div>
    </>
  );
}

export default App;
