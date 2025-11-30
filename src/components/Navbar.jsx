import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="container absolute top-0 left-0 right-0 z-50">
            <nav className='flex justify-between items-center py-[40px]'>
                <div className="logo">
                    <img src="siteLogo.png" alt="website-logo" />
                </div>
                <ul className="nav-menu flex gap-[60px]">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about-us">About US</Link>
                    </li>
                    <li>
                        <Link to="/causes">Causes</Link>
                    </li>
                    <li>
                        <Link to="/donation">Donation</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact US</Link>
                    </li>
                </ul>
                <div className="action-btns flex gap-[10px]">
                    <button className="primary-btn">Donate Now</button>
                    <button className="secondary-btn">Sign Up</button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar