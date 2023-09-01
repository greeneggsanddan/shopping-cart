import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App';
import ErrorPage from './ErrorPage';
import Home from './Home';
import Shop from './Shop';

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
          element: <Shop />,
          loader: async ({ params }) => {
            try {
              const response = await fetch(`https://api.scryfall.com/cards/search?order=set&q=set%3A${params.set}`, { mode: 'cors' });
              let apiData = await response.json();
              let shopData = apiData.data;

              while (apiData.has_more) {
                const nextResponse = await fetch(apiData.next_page, { mode: 'cors' });
                const nextPageData = await nextResponse.json();
                shopData = shopData.concat(nextPageData.data);
                apiData = nextPageData;
              }
              
              return shopData;
            } catch (error) {
              console.error(error);
            }
          },
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
