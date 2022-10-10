
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Cart from './components/Cart/Cart';
import Home from './components/Home/Home';
import Orders from './components/Orders/Orders';
import Main from './layouts/Main/Main';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/orders',
          loader: ()=> fetch('https://fakestoreapi.com/products'),
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
    <div className="App">
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;
