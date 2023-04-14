import React from 'react'
import "./NavBarStyles.css"
import logo from "../Assets/Images/Logo.svg"
import { Link } from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import { useState } from "react";

const NavBar = () => {
    const [click,setClick] = useState(false);
    const handleClick = () => setClick (!click);

  return (
    <header className='header'>
        <nav className='nav'>
            <Link to= "/">
            <img src={logo} />
            </Link>
            <ul className={click ? "nav-links active" :
    "nav-links"}>
                <li>
                <Link to= "/">Home</Link>
                </li>
                <li>
                <Link to= "/About">About</Link>
                </li>
                <li>
                <Link to= "/Menu">Menu</Link>
                </li>
                <li>
                <Link to= "/Reservations">Reservations</Link>
                </li>
                <li>
                <Link to= "/OrderOnline">Order Online</Link>
                </li>
                <li>
                <Link to= "/Login">Login</Link>
                </li>
            </ul>
            <div className="hamburger" onClick={handleClick}>
            {click ? 
            (<FaTimes size={20} style={{color:"black"}}/>) 
            : 
            (<FaBars size={20} style={{color:"black"}}/>)}  
        </div>
        </nav>
    </header>
  )
}

export default NavBar