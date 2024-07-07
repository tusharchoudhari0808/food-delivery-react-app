import React, { useState } from 'react'
import './App.css';
import Navbar from './component/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import PlaceOrder from './pages/Placeorder/PlaceOrder';
import Card from './pages/Card/Card';
import Home from './pages/Home/Home';
import Footer from './component/Footer/Footer';
import LoginPage from './component/LoginPage/LoginPage';

function App() {

const [ShowLogin,setShowLogin] = useState(false);

  return (
  <>
     {ShowLogin?<LoginPage setShowLogin={setShowLogin}/>:<></>}

    <div className="App">
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/card' element={<Card/>}/>
      <Route path='/Order' element={<PlaceOrder/>}/>
      </Routes>
    </div>
     <Footer/>
  
  
  </>
  );
}

export default App;
