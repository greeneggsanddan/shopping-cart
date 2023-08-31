import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App';
import ErrorPage from './ErrorPage';
import Home from './Home';
import Filter from './Filter';
// import Woe from './Woe';
// import Cmm from './Cmm';
// import Ltr from './Ltr';

export default function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "shop/:set",
          element: <Filter />
          // path: 'shop',
          // element: <Filter />,
          // errorElement: <ErrorPage />,
          // children: [
          //   {
          //     path: 'shop/woe',
          //     element: <Woe />,
          //   },
          //   {
          //     path: 'shop/cmm',
          //     element: <Cmm />,
          //   },
          //   {
          //     path: 'shop/ltr',
          //     element: <Ltr />,
          //   },
            // {
            //   path: 'cart',
            //   element: <Cart />,
            // },
          // ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
