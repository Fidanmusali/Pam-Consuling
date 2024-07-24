import React from 'react'
import './style.css'
import fh1 from '../../../../../public/Icons/fh1.png'
import fh2 from '../../../../../public/Icons/fh2.png'
import fh3 from '../../../../../public/Icons/fh3.png'
import fh4 from '../../../../../public/Icons/fh4.png'
import fh5 from '../../../../../public/Icons/fh5.png'



const FamilyHelp = () => {
    return (
        <div>
            <div className="familyHelp">
                <h2>HOW WE CAN HELP</h2>
                <div className="famHelpGrp">
                    <div className="fh1">
                        <img src={fh1} alt="" />
                        <h3>Pre-arrival Planning</h3>
                        <p>We provide a step-by-step plan that will handle every aspect of your family’s relocation process.</p>
                    </div>

                    <div className="fh1">
                        <img src={fh2} alt="" />
                        <h3>Housing and Location Options
                        </h3>
                        <p>Together, we will discuss and review housing options according to your needs and expectations.</p>
                    </div>

                    <div className="fh1">
                        <img src={fh3} alt="" />
                        <h3>Immigration Assistance </h3>
                        <p>Our consultation
                            services will
                            simplify
                            immigration
                            matters, helping
                            you arrange the
                            documents you
                            need.</p>
                    </div>

                    <div className="fh1">
                        <img src={fh4} alt="" />
                        <h3>Education Options </h3>
                        <p>We will provide you with every schooling option available for your children and assist you in making your decision.</p>
                    </div>

                    <div className="fh1">
                        <img src={fh5} alt="" />
                        <h3>Personalized Support</h3>
                        <p>Our services include providing you with any information you may need about living in Cyprus with your family.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default FamilyHelp