import React from 'react'
import './style.css'
import { NavLink } from 'react-router-dom'
import city1 from '../../../../public/Icons/city1.png'
import city2 from '../../../../public/Icons/city2.png'
import city3 from '../../../../public/Icons/city3.png'
import city4 from '../../../../public/Icons/city4.png'



const Header = () => {
  return (
    <>
      <header>
        <div className="pTags">
          <p>INVESTMENTS</p>
          <p>BUSINESS RELOCATION</p>
          <p>FAMILY RELOCATION</p>
        </div>
        <h1>Relocating to Cyprus </h1>
        <p className='text1'>Seamless – Exceptional – Experience </p>
        <p className='text2'>
          The captivating Mediterranean island of Cyprus has become a business haven with a flourishing expat community. The strategic location that grants networking opportunities and the stability of being in the EU offers entrepreneurs the abilities they need
          to thrive.
        </p>
        <NavLink to={"./AboutUs"} className='findOutBtn'>Find Out More</NavLink>
        <h2>Most popular cities</h2>
        <div className="groups">
          <div className="g1">
            <img src={city1} alt="" />
            <p>Nicosia</p>
          </div>
          <div className="g1">
            <img src={city2} alt="" />
            <p>Limassol</p>
          </div>
          <div className="g1">
            <img src={city3} alt="" />
            <p>Paphos</p>
          </div>
          <div className="g1">
            <img src={city4} alt="" />
            <p>Larnaka</p>
          </div>

        </div>


      </header>

    </>
  )
}

export default Header