
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';


import Home from './components/Home/home.js';
import Cart from './components/Cart/cart.js';

//import Demo from './components/Demo/demo.js';

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';


const router = createBrowserRouter([
  {
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/cart",
        element: <Cart />
      }
    ],
  },
]);

const App =()=>{
    return (
          <div>
            <RouterProvider router={router}/>
        </div>
    )
  }

export default App;
