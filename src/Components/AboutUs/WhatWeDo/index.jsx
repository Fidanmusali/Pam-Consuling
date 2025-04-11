import React from 'react'
import './style.css'
import what from '../../../../public/Icons/what.png'

const WhatWeDo = () => {
    return (
        <div>
            <div className="whatWeDo">
                <div className="what1">
                    <h2>WHAT WE DO</h2>
                    <p>We provide solutions based on strategic planning that responds to your needs.  Our business relocation services prioritize your business goals and ambitions. Changing your businesses’ location is a big step towards progress and it is essential that everything goes as smooth as possible. While you focus on boosting your company’s strategies, we take care of everything else. </p>
                    <br />
                    <p>
                        The decision to move from one place to another with your family is life-changing. As you expect this change to be for the better, our family relocation services make sure to consider every aspect of your family’s requirements.  As you settle in Cyprus, we also offer you the opportunity to discover different investment plans that can further enable you to expand your financial and business horizons. </p>
                </div>
                <div className="what2">
                    <img src={what} alt="" />
                </div>


            </div>

        </div>
    )
}

export default WhatWeDo