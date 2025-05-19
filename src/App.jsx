import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Home from './ui/Home';
import AppLayout from './ui/AppLayout ';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/menu',
        element: <div>Menu Page</div>,
      },
      {
        path: '/cart',
        element: <div>Cart Page</div>,
      },
      {
        path: '/order/new',
        element: <div>Create Order Page</div>,
      },
      {
        path: '/order/:orderId',
        element: <div>Order Details Page</div>,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
