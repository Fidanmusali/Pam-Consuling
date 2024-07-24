import React from 'react'
import './style.css'
import c1 from '../../../../public/Icons/c1.png'
import c2 from '../../../../public/Icons/c2.png'
import c3 from '../../../../public/Icons/c3.png'
import c4 from '../../../../public/Icons/c4.png'



const Cyprus = () => {
    return (
        <div>
            <div className="cyprus">
                <h2>WHY CHOOSE CYPRUS?</h2>
                <p className='cyprusText'> When you’re searching for the ideal home you want everything to be perfect. This is why over the years more and more people from all around the world are choosing Cyprus as their ultimate destination. This smal Mediterranean mesmerizes millions of visitors every year.</p>
                <div className="cyprusGroup">
                    <div className="cypgroup">
                        <img src={c1} alt="" />
                        <h3>Progressive tax system</h3>
                        <p>Offering one of the most attractive tax regimes in Europe</p>
                    </div>
                    <div className="cypgroup">
                        <img src={c2} alt="" />
                        <h3>Stunning weather and climate</h3>
                        <p>Enjoy a high quality of life with over 324 days of sun annually</p>
                    </div>
                    <div className="cypgroup">
                        <img src={c3} alt="" />
                        <h3>Blooming expat community</h3>
                        <p> Become part of an increasingly diverse community</p>
                    </div>
                    <div className="cypgroup">
                        <img src={c4} alt="" />
                        <h3>Family-oriented values</h3>
                        <p> Excellent education standards and extremely low crime rates</p>
                    </div>

                </div>


            </div>

        </div>
    )
}

export default Cyprus