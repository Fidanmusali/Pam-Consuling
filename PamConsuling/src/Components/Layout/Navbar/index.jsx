import React from 'react'
import icon1 from "../../../../public/Icons/logo.png"
import './style.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav>
                <div className="logo">
                    <div className="logoImg">
                        <NavLink to='/'> <img src={icon1} alt="" /> </NavLink>
                       
                    </div>
                </div>
                <div className="navBar " >
                    <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to='/'>Home</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to='/AboutUs'>About Us</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to='/Services'>Services</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to='/InvestInCyprus'>Invest in Cyprus</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to='/Migration'>Migration</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to='/ContactUs'>Contact Us</NavLink>
                </div>
            </nav>
        </>
    )
}

export default Navbar