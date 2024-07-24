import React from 'react'
import './style.css'
import bh1 from '../../../../../public/Icons/bh1.png'
import bh2 from '../../../../../public/Icons/bh2.png'
import bh3 from '../../../../../public/Icons/bh3.png'
import bh4 from '../../../../../public/Icons/bh4.png'
import bh5 from '../../../../../public/Icons/bh5.png'



const BusinessHelp = () => {
    return (
        <div>
            <div className="businessHelp">
                <h2>HOW WE CAN HELP</h2>
                <div className="businessHelpGroup">
                    <div className="bh1">
                        <img src={bh1} alt="" />
                        <h3>Location Selection
                        </h3>
                        <p>We assist in the process of selecting the ideal location for your business.</p>
                    </div>

                    <div className="bh1">
                        <img src={bh2} alt="" />
                        <h3>Setting Up Your Business</h3>
                        <p>We help with the corporate establishment, handling compliance and legal matters.</p>
                    </div>

                    <div className="bh1">
                        <img src={bh3} alt="" />
                        <h3>Relocating Family and Staff </h3>
                        <p>We take care of your family and employees, finding them the ideal location to settle. </p>
                    </div>

                    <div className="bh1">
                        <img src={bh4} alt="" />
                        <h3>Facilitation of Newcomers</h3>
                        <p>We provide support and exceptional services to every newcomer of your business.</p>
                    </div>

                    <div className="bh1">
                        <img src={bh5} alt="" />
                        <h3>Ongoing Support </h3>
                        <p>We remain at your disposal should you need any further assistance and guidance.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BusinessHelp