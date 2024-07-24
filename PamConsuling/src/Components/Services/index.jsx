import React from 'react'
import './style.css'
import service1 from '../../../public/Icons/s1.png'
import service2 from '../../../public/Icons/s2.png'
import service3 from '../../../public/Icons/s3.png'
import ScrollToTop from '../ScrollTop'



const Services = () => {
  return (
    <>
      <div className="services">
        <ScrollToTop/>
        <h2>OUR SERVICES</h2>
        <div className="sGroup">
          <div className="s1group">
            <img src={service1} alt="" />
            <h4>FAMILY RELOCATION</h4>
            <p>With strategic planning, we simplify the moving process so you and your family can feel safe and confident.</p>

          </div>

          <div className="s1group">
            <img src={service2} alt="" />
            <h4>FAMILY RELOCATION</h4>
            <p>With strategic planning, we simplify the moving process so you and your family can feel safe and confident.</p>
          </div>

          <div className="s1group">
            <img src={service3} alt="" />
            <h4>FAMILY RELOCATION</h4>
            <p>With strategic planning, we simplify the moving process so you and your family can feel safe and confident.</p>
          </div>
        </div>

      </div>

    </>
  )
}

export default Services