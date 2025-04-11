import React from 'react'
import villa1 from '../../../../public/Icons/villa1.png'
import villa2 from '../../../../public/Icons/villa2.png'
import './style.css'


const Paradise = () => {
    return (
        <div>
            <div className="paradise">
                <img src={villa1} alt="" />
                <div className="paradiseText">
                    <h2>MOVING TO PARADISE</h2>
                    <p>Have you ever dreamed about the perfect place to live? Your definition of perfect may be different someone else’s. Are you longing to live by the beach and listen to the soothing waves or are you a kind of person who enjoys the bustling sounds of the city? Whatever lifestyle you desire, Cyprus has it all! Whether you’re travelling with your family, your partner, or as a solo business entrepreneur, this exotic island can offer you a little bit of everything. </p>
                    <br />
                    <p>If you’ve made the decision to relocate to Cyprus, then you are expecting to find a safe place to settle. With extremely low crime rate, stunning sandy beaches, and awe-inspiring mountain views, Cyprus is the place to be! </p>
                </div>
                <img src={villa2} alt="" />
            </div>
        </div>
    )
}

export default Paradise