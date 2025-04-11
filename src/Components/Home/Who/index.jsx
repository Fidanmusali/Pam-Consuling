import React from 'react'
import { NavLink } from 'react-router-dom'
import person from '../../../../public/Icons/person.png'
import './style.css'

const Who = () => {
    return (
        <div>
            <div className="whoWeAre">
                <div className="whoPart1">
                    <h2>WHO WE ARE</h2>
                    <p>PAM Consulting is built upon a team of motivated professionals aiming to provide families and businesses the services they need to relocate to the island of Cyprus. </p>
                    <br />
                    <p>
                        We understand the challenges of deciding to relocate and this is why we prioritize our clients’ needs by making sure that the whole relocation process is as smooth and simple
                        as possible.</p>
                    <div className="whoBtn">
                        <NavLink className="a" to={"/AboutUs"}>More About Us</NavLink>
                    </div>
                </div>

                <div className="whoPart2">
                    <img src={person} alt="" />
                    <div className="founderInfo">
                        <h3>Founder</h3>
                        <p>Anastasia Papaharidemou</p>
                        <div className="whoBtn">
                        <NavLink className="a" to={"/ContactUs"}>Contact Us</NavLink>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Who