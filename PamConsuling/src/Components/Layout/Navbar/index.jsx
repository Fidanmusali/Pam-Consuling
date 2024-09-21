import React, { useState } from 'react'
import icon1 from "../../../../public/Icons/logo.png"
import './style.css'
import { NavLink } from 'react-router-dom'
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false);
    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar);
    };
    return (
        <>
            <nav>
                <div className="logo">
                    <div className="logoImg">
                        <NavLink to='/'> <img src={icon1} alt="" /> </NavLink>

                    </div>
                </div>
                <div className={`navBar ${showNavbar ? "active" : ""}`} >
                    <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to='/'>Home</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to='/AboutUs'>About Us</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to='/Services'>Services</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to='/InvestInCyprus'>Invest in Cyprus</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to='/Migration'>Migration</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to='/ContactUs'>Contact Us</NavLink>
                </div>
                <div className="divNavbar">
                <div className="bars" onClick={handleShowNavbar}>
                    <FaBars />
                </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar