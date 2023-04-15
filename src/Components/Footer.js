import React from 'react'
import "./FooterStyles.css"
import Logo1 from "../Assets/Images/Logo1.png"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='footer'>
        <main className='footer-container'>
            <Link to="/" className='Link'>
            <img src={Logo1} alt='restaurant-logo' />
            </Link>
            <div>
                <h2>Website Navigation</h2>
                <ul className='footer-links'>
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
            </div>
            <div>
                <h2>Contact</h2>
                <p>Address:</p>
                <p>Phone:</p>
                <p>E-mail:</p>
            </div>
            <div>
                <h2>Social Media Links</h2>
                <p>Address:</p>
                <p>Phone:</p>
                <p>E-mail:</p>
            </div>
        </main>
    </footer>
  )
}

export default Footer