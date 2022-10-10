
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/About/About';
import Cart from './components/Cart/Cart';
import Home from './components/Home/Home';
import Orders from './components/Orders/Orders';
import Main from './layouts/Main/Main';
import { ProductAndCarts } from './loaders/getProductAndCarts';


function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      loader: ProductAndCarts,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/orders',
          element:<Orders></Orders>

        },
        {
          path:'carts',
          element:<Cart></Cart>
        },
        {
          path:'/about',
          element:<About></About>
        }
      ]
    }
  ])
  return (
  
      <RouterProvider router={router}>

      </RouterProvider>
   
  );
}

export default App;
