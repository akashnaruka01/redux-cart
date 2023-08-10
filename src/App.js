import React from 'react'
import './Styles/app.scss'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Components/Home';
import Header from './Components/Header';
import Cart from './Components/Cart';
import Footer from './Components/Footer';
import {Toaster} from 'react-hot-toast';

const App = () => {
  return <Router>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes> 
    <Footer/>
    <Toaster/>
  </Router>   
}

export default App