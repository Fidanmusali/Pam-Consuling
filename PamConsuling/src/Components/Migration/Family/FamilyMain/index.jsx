import React from 'react'
import familymain from '../../../../../public/Icons/familyMain.png'
import fam1 from '../../../../../public/Icons/fam1.png'
import fam2 from '../../../../../public/Icons/fam2.png'
import fam3 from '../../../../../public/Icons/fam3.png'

import './style.css'

const FamilyMain = () => {
    return (
        <div>
            <div className="familyMain">
                <div className="familyMainImg">
                    <img src={familymain} alt="" />
                </div>
                <div className="familyGroup">
                    <div className="fam1">
                        <div className="famInfo">
                            <h2>Living the Island Life</h2>
                            <p>When you make the decision to move to a different country with your family, you’re looking for the perfect place to call home. Every person and every family has their own perception of what an ideal place to live looks like. While some people prefer to live by the beach, others prefer the mountains. You may long to live in a quiet little village, while others enjoy the bustling life of the city. So, why do thousands of families choose Cyprus as their ultimate destination? Because this island has it all! Everything is in close proximity, enabling you to discover every hidden aspect of the island. </p>
                            <br />
                            <ul>The Cypriot lifestyle embraces people of all ages and backgrounds.</ul>
                            <br />
                            <li>Laid-back lifestyle: The Mediterranean way of life comes to contradict the tiresome and stressful life in larger cities and countries.</li>
                            <li>Low pollution levels: Striving to become even more environmentally-friendly, Cyprus’s air quality is high.</li>
                            <li>Stunning beaches: One of the most obvious reasons people move to Cyprus is the ability to live by some of the most magical and turquoise beaches of the world.</li>
                            <li>The fantastic Cypriot weather: Cyprus's climate is considered one of the healthiest in the world, with over 300 days of sunshine annually. Average winter temperatures are 13-15°C, and summer temperatures are 30-33°C.</li>
                            <br />
                            <p>It doesn’t take long to be captivated by the mesmerizing Cypriot lifestyle. All of these advantages makes the decision to relocate much easier. </p>
                        </div>

                        <div className="famImg">
                            <img src={fam1} alt="" />
                        </div>
                    </div>

                    <div className="fam1">
                        <div className="famImg">
                            <img src={fam2} alt="" />
                        </div>

                        <div className="famInfo">
                            <h2>Child-Friendly Community</h2>
                            <p>Your most prominent priority when relocating your family is that your children’s quality of life will only get better once you move and settle down. The process of moving is challenging for anyone, and this is especially true when it comes to children who need to adapt to a new way of life. The family-oriented environment of Cyprus makes this process much more enjoyable. With a huge variety of activities and experiences, children of all ages can discover new hobbies and skills. The diverse cultural community is also a chance for children to understand the world and cultivate their minds to become accepting towards people from all around the world. </p>
                            <br />
                            <li>Extremely low crime rates: Safety and security are among the most important reasons why Cyprus is great for families.</li>
                            <li>Education system: Your children have the opportunity to experience one of Europe’s highest education standards in every level of education.</li>
                            <li>Quality public and private healthcare: with an excellent multi-layered healthcare system, you can have easy access to hospitals and clinics of the country.</li>
                            <li>Abundance of entertainment activities: From watersports to playgrounds, farms, and historical attractions, your children will never get bored of the island life.</li>
                            <br />
                            <p>The friendly and welcoming manner of the locals also adds to the peaceful atmosphere of the island, making you and your family feel instantly at home.
                            </p>




                        </div>
                    </div>


                    <div className="fam1">
                        <div className="famInfo">
                            <h2>What it’s like to be an Expat in Cyprus</h2>
                            <p>Cyprus is among Europe’s most popular destinations for tourists from all around the globe. On this little Mediterranean island you will meet people with different cultural backgrounds, speaking a variety of languages. The thousands of people who have moved permanently to Cyprus have been living on the island for many years, creating expat communities in every city. This enhances the sense of feeling at home away from home.</p>
                            <br />
                            <li>Large expat community: Cyprus is becoming more and more attractive to immigrants from all around the world and is one of Europe’s largest expat destinations.</li>
                            <li>English is widely spoken: Greek and Turkish are the official languages of the island, but English is widely spoken by almost everyone.</li>
                            <li>The low cost of living: While prices vary from city to city, the cost of living is relatively low and affordable compared to other cities in Europe. </li>
                            <li>Many employment and work opportunities: Business and economy thrives on the multicultural environment of the country, enabling you and your family to easily find the job opportunity you are looking for.</li>
                            <br />
                            <p>Whichever city you may choose to relocate to, you and your family will be able to shape the life you dream about.</p>
                        </div>

                        <div className="famImg">
                            <img src={fam3} alt="" />
                        </div>
                    </div>


                </div>
            </div>


        </div>
    )
}

export default FamilyMain