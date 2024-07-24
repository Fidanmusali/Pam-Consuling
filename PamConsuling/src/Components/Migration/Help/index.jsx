import React from 'react'
import './style.css'
import { Link, NavLink } from 'react-router-dom'
import ScrollToTop from '../../ScrollTop'

const Help = () => {
    return (
        <div>
            <ScrollToTop/>
            <div className="help">
                <h2>HOW WE CAN HELP</h2>
                <p>Leaving your home country to settle in another is always accompanied by complex immigration processes such as registration, finding housing, signing documents, opening a bank account, finding schooling for your children, and much more. This process can make anyone feel stressed and uncertain about the next move. For this reason, our all-encompassing services make sure to make the relocation process as smooth as possible by handling everything that has to do with relocating your family and your business to Cyprus. </p>

                <div className="helpGroup">
                    <li><Link to='/business' className='a'>Business Relacation </Link></li>
                    <li><Link to='/family' className='a'>Family Relacation</Link></li>
                    <li><Link to='/investment' className='a'>Investment Relacation </Link></li>
                </div>

                <p>We want you to feel confident in your decision to relocate to Cyprus, as we take care of the challenging parts of moving. Moving to Cyprus is in itself an investment in your future.
                </p>
            </div>
        </div>
    )
}

export default Help