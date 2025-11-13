
import React, { useState } from 'react';
import './App.css';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from './login/login';
import Signup from './signup/signup';
import Home from './home/home';
import Admin from './admin/admin';
import Updateproduct from './admin/goldupdate';
import Gold from './gold/gold';
import Diamondadmin from './admin/diamondadmin';
import Platinumdadmin from './admin/platinumadmin';
import Wallet from './cart/cart';
import Diamond from './diamond/diamond';
import Platinum from './platinum/platinum';
import Diamondupdate from './admin/diamondupdate';
import Platinumupdate from './admin/platinumupdate';
import Payment from './cart/payment';


export const Context = React.createContext();
const router = createBrowserRouter([
  {
    path:"/",
    element:<Login />
  },
  {
    path:"/signup",
    element:<Signup />
  },
  {
    path:"/home",
    element:<Home />
  },{
    path:"/admin",
    element:<Admin /> 
  },{
    path:"/update/product/:id",
    element:<Updateproduct />
  },{
    path:"/gold",
    element:<Gold />
  },{
    path:"/diomondadmin",
    element:<Diamondadmin />
  },{
    path:"/platinumadmin",
    element:<Platinumdadmin />
  },
  {path:"/cart",
    element:<Wallet />
  },{
    path:"/diamond",
    element:<Diamond />
  },{
    path:"/platinum",
    element:<Platinum />
  },{
    path:"/update/product1/:id",
    element:<Diamondupdate />
  },{
    path:"/update/product2/:id",
    element:<Platinumupdate />
  },{
    path:"/payment",
    element:<Payment />
  }


])
// Creates a router object to define app routes.
function App() {

  const [user, setuser ] = useState("");
  const [page, setPage] = useState("/"); 
  const [cart, setCart] = useState([]);
  return (
    <div className="App">
     <header className="App-header">
    <Context.Provider value={{ user, setuser, setPage, cart, setCart }}>
        <RouterProvider router={router}/>   
        </Context.Provider> 
  </header>
       
    </div>
  );
}

export default App;
