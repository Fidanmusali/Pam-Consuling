import React from 'react'
import './style.css'
import v1 from '../../../../public/Icons/v1.png'
import v2 from '../../../../public/Icons/v2.png'
import v3 from '../../../../public/Icons/v3.png'
import v4 from '../../../../public/Icons/v4.png'





const WhatWeDoIt = () => {
  return (
    <div>
        <div className="whatWeDoIt">
            <h2>WHY WE DO IT -OUR VALUES</h2>
            <div className="valueGroup">
                <div className="value1">
                  <div className="valueImg">
                  <img src={v1} alt="" />
                  </div>
                    <h3>Time Efficiency </h3>
                    <p>As our team works efficiently and strategically, the whole relocation process is completed in a short amount of time so you can have more time to focus on setting up your life in Cyprus.</p>
                </div>

                <div className="value1">
                <div className="valueImg">
                  <img src={v2} alt="" />
                  </div>
                    <h3>Gratifying Experience  </h3>
                    <p>Moving can be intimidating and demanding experience for anyone. Our team makes sure to come up with the best relocation strategy, offering you a piece of mind and a sense of security.</p>
                </div>

                <div className="value1">
                <div className="valueImg">
                  <img src={v3} alt="" />
                  </div>
                    <h3>Personalized Supporty  </h3>
                    <p>Our services include providing you with any information you may need about living in Cyprus with your family.</p>
                </div>

                <div className="value1">
                <div className="valueImg">
                  <img src={v4} alt="" />
                  </div>
                    <h3>Time Efficiency </h3>
                    <p>As our team works efficiently and strategically, the whole relocation process is completed in a short amount of time so you can have more time to focus on setting up your life in Cyprus.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhatWeDoIt