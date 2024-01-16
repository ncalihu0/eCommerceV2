import React from 'react'
import { Link } from 'react-router-dom';
import Icons from './Icons';
import Logo from '../images/logo.png';

export default function Navbar() {
    return (
        <nav className="mainNav">
            <Link to="/">
                <img src={Logo} alt="byShop Logo" className="navImg" />
            </Link>
            <div className="mainLinks">
                <Link to="/Products" className="mainLinks1">Products</Link>
                <Link to="/Contact">Contact Us</Link>
                <Link to='/SignIn'>Sign In</Link>
            </div>
            <Icons />
        </nav>
    )
}
