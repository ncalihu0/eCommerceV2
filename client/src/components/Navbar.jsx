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

                <section className='content'>
                    <Link>Entry</Link>
                    <section className='links'>
                        <Link to="/Signin">Sign In</Link>
                        <Link to="/Signup">Sign Up</Link>
                    </section>
                </section>
            </div>
            <Icons />
        </nav>
    )
}
