import React, {useState} from 'react'
import './Navbar.css'
import {assets} from  "../../assets/assets"
import { Link } from 'react-router-dom';


const Navbar = ({setShowLogin}) => {
    
  const [menu,setMenu]=useState("home");

  return (
    <div className="navbar">
      <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link>
      <ul className="navbar-menu">
        <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</Link>
        <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>menu</a>
        <a href='#app-download' onClick={()=>setMenu("moblie-app")} className={menu==="moblie-app"?"active":""}>moblie-app</a>
        <a href='#footer' onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>contact us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-secrch-icon">
            <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
            <div className="dot">
              
            </div>
        </div>
        <button onClick={()=>setShowLogin(true)}>signup</button>
      </div>
        
    </div>
  )
}

export default Navbar