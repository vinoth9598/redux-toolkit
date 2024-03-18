
import React from 'react';
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import NavBar from './component/NavBar';
import Cart from './component/Cart';
import Home from './component/Home';
import NotFound from './component/NotFound';


function App() {
  return (
    <div>
        <Router>
        <ToastContainer/>
            <NavBar/>
            <Routes>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/notfound' element={<NotFound/>}/>
                <Route path="/" exact element={<Home/>} />
            </Routes>
        </Router>
    </div>
  )
}

export default App;

