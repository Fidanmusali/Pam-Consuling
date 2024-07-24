import React from 'react'
import './style.css'
import ih1 from '../../../../../public/Icons/ih1.png'
import ih2 from '../../../../../public/Icons/ih2.png'
import ih3 from '../../../../../public/Icons/ih3.png'
import ih4 from '../../../../../public/Icons/ih4.png'
import ih5 from '../../../../../public/Icons/ih5.png'



const InvestmentHelp = () => {
  return (
    <div>
      <div className="investmentHelp">
        <h2>HOW WE CAN HELP</h2>
        <div className="invesHelpGrp">
          <div className="ih1">
            <img src={ih1} alt="" />
            <h3>We listen</h3>
            <p>You come to us with your goals, and we make sure to understand your needs to the fullest.</p>
          </div>

          <div className="ih1">
            <img src={ih2} alt="" />
            <h3>We plan</h3>
            <p>We put all our efforts into creating the perfect investment plan for your family and business.</p>
          </div>

          <div className="ih1">
            <img src={ih3} alt="" />
            <h3>We recommend</h3>
            <p>We give you the opportunity to consider a variety of options so you can have a better understanding of investing in Cyprus.</p>
          </div>

          <div className="ih1">
            <img src={ih4} alt="" />
            <h3>We provide</h3>
            <p>We offer you our services based on trustworthy agreements with renowned partners in Cyprus.</p>
          
          </div>

          <div className="ih1">
            <img src={ih5} alt="" />
            <h3>We support</h3>
            <p>Once you decide on your investment plan, we remain by your side to make sure everything meets your expectations.
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default InvestmentHelp