import React from 'react'
import './style.css'
import mig1 from '../../../../public/Icons/mig1.png'
import mig2 from '../../../../public/Icons/mig2.png'
import mig3 from '../../../../public/Icons/mig3.png'


const MigrationInfo = () => {
    return (
        <div>
            <main>
                <div className="migInfos1">
                    <div className="migInfo1">
                        <h2>Permanent Residency in Cyprus Benefits </h2>
                        <p>The decision to relocate your business or move with your family to Cyprus comes with the decision to enhance your quality of life. As Cyprus is among the most beloved travel destinations for millions of tourists every year, an increasing number of individuals and families have decided to turn the Mediterranean island into their permanent home. With over 17% of its population being international migrants, Cyprus has numerous expat communities all around the island. </p>
                        <p>Becoming a permanent resident in Cyprus offers you the opportunity to enjoy a multitude of benefits, helping your business thrive and making your family feel welcome and safe. </p>
                        <p>It’s important to know that Cyprus Permanent Residency can be obtained by purchasing property or living in Cyprus for a continuous period of five years or more. Some of the most important benefits of becoming a permanent resident in Cyprus are the following: </p>
                        <br />
                        <li> Obtaining EU residency in a safe and secure jurisdiction</li>
                        <li> Easy access to Europe due to great geographical location</li>
                        <li>Exceptional education standards for your children </li>
                        <li>Outstanding medical facilities and high quality healthcare </li>
                        <li>No inheritance tax</li>
                        <li>Opportunity to have obtain an EU passport </li>
                        <li>Enjoying a high quality of life</li>
                        <br />
                        <p>Once you experience life on the island, you will have gained a new perspective on life. The blue-flagged clear beaches and the sunny weather all year long, will become your own personal oasis where you can boost your business opportunities and enjoy a relaxed lifestyle with your family.</p>
                    </div>
                    <div className="migInfoImg1">
                        <img src={mig1} alt="" />
                    </div>
                </div>




                <div className="migInfos1">
                    <div className="migInfoImg2">
                        <img src={mig2} alt="" />
                    </div>
                    <div className="migInfo1">
                        <h2>Why to Invest in Cyprus</h2>
                        <p>PAM Consulting services include assistance and consulting when it comes to your investing plans in Cyprus. We will prioritize your needs and expectations by offering you a variety of investment options for you to choose from. In an accelerating pace, Cyprus has grown into one of the dominant investment-friendly countries in the EU. It is evident that due to the government’s efforts to welcome more immigrants to Cyprus, the investment opportunities are vast and customizable for individuals.</p>
                        <br />

                        <ul>The main reasons why more and more people are investing in Cyprus are:  </ul>
                        <li>Cyprus has the lowest corporate tax rate in Europe at 12.5%</li>
                        <li>No capital gains tax or inheritance tax </li>
                        <li>Tax exemptions on worldwide dividends as well as interest income </li>
                        <li>No Immovable Property Tax</li>
                        <li>Corporate tax relief up to 75% for holdings</li>
                        <li>Competitive VAT rates ranging from 0- 19% </li>
                        <li>Low national healthcare tax contribution of 2.65-4.7%</li>
                        <br />
                        <p>Whether you’re aiming to increase your financial possibilities or increase your business outlook, Cyprus is an ideal place to start. With the ability to choose from endless investment plans, you can be one step closer to manifesting your goals. </p>
                    </div>
                </div>




                <div className="migInfos1">
                    <div className="migInfo1">
                        <h2>Important Information to Know Before Immigrating to Cyprus
                        </h2>
                        <p>As you are planning to achieve a fresh start in Cyprus, we would like to provide you with some basic information about the island and what to expect when you arrive.</p>
                        <li> <span>Capital City:</span> Nicosia is the largest city of the island which has over 200000 residents, meaning about 16.6% of the country’s population.</li>
                        <li> <span> Currency:</span> The currency of Cyprus is the Euro. </li>
                        <li> <span> Population: </span>Cyprus’s current population is 1.207 million.</li>
                        <li> <span> Official Languages:</span> The official languages of the island are Greek and Turkish, and English is widely spoken by locals.</li>
                        <li> <span>Cost of Living:</span>  Compared to other European countries, the cost of living is relatively low in Cyprus.</li>
                        <li> <span> Job Market:</span> As a member of the EU since 2004, the business-friendly environment provides access to a wide range of markets, with some of the most prominent being in the financial sector, IT and technology services, and tourism. </li>
                        <li> <span> Education:</span> Public and Private Education in Cyprus meets outstanding quality standards.</li>

                       <p>Getting to know the ins and outs of the island is easy and exciting. Our team at PAM Consulting is also here to assist you with any additional information you may require.</p> 

                    </div>
                    <div className="migInfoImg3">
                        <img src={mig3} alt="" />
                    </div>
                </div>
            </main>

        </div>
    )
}

export default MigrationInfo