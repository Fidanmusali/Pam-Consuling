import React from 'react'
import './style.css'
import h1 from '../../../../public/Icons/h1.png'
import h2 from '../../../../public/Icons/h2.png'
import h3 from '../../../../public/Icons/h3.png'
import h4 from '../../../../public/Icons/h4.png'


const Happen = () => {
  return (
    <div>
        <div className="happen">
            <h2>HOW WE MAKE IT HAPPEN</h2>

            <div className="happenGroup">
                <div className="hgroup1">
                    <img src={h1} alt="" />
                    <h3>We listen</h3>
                    <p>Our most prominent purpose is to understand and identify with your needs so we can effectively find ways to provide solutions.</p>
                </div>
                <div className="hgroup1">
                    <img src={h2} alt="" />
                    <h3>We strategize</h3>
                    <p>According to your requirements, our team designs a thorough series of steps that will make the relocation process as smooth 
                    as possible.</p>
                </div>
                <div className="hgroup1">
                    <img src={h3} alt="" />
                    <h3>We provide</h3>
                    <p>We implement our services that are based on efficient strategic planning that respond to your family’s and business’s goals and ambitions.</p>
                </div>
                <div className="hgroup1">
                    <img src={h4} alt="" />
                    <h3>We manage</h3>
                    <p>Once you are settled, we make sure that everything is according to your expectations and your vision of the quality of our services.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Happen