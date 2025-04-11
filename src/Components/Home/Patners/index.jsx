import React from 'react'
import './style.css'
import patners from '../../../../public/Icons/patners.png'

const Patners = () => {
  return (
    <div>
        <div className="patners">
            <h2>OUR PATNERS</h2>
            <div className="patnersImg">
                <img src={patners} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Patners