import React ,{useContext, useState} from 'react'
import './Navbar.css'
import {assets} from '../../asset/assets';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
const Navbar = ({setShowLogin}) => {

  const [manu , setManu] = useState("manum");

  const {getTotleCardAmount} = useContext(StoreContext);



  return (
    <div className="navbar">
      <img src={assets.logo} alt="" className="logo"></img>
      <ul className="navbar-menu" >
        <Link to='/' onClick={()=>setManu("home")}className={manu==="home"?"active":" "}>Home</Link>
        <a href="#explore-manur"  onClick={()=>setManu("manu")}className={manu==="manu"?"active":" "}>Manu</a>
        <a href="#app-Downlode" onClick={()=>setManu("mobile-app")}className={manu==="mobile-app"?"active":" "}>Mobile App</a>
        <a href="#footer" onClick={()=>setManu("contect-us")}className={manu==="contect-us"?"active":" "}>Contect Us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
         <Link to="/Card"><img src={assets.basket_icon} alt="" /></Link> 
          <div className={getTotleCardAmount() === 0 ? "" : "dot"}></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>Sing in</button>
      </div>
      
    </div>
  )
}

export default Navbar
