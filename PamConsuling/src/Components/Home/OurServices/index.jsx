import React from 'react'
import './style.css'
import Service1 from '/Icons/s1.png'
import Service2 from '/Icons/s2.png'
import Service3 from '/Icons/s3.png'
import { NavLink } from 'react-router-dom'


const OurServices = () => {
    const services = [
        {
            id: 0,
            title: 'FAMILY RELOCATION',
            description: 'With strategic planning, we simplify the moving process so you and your family can feel safe and confident.',
            image: Service1
        },
        {
            id: 0,
            title: 'BUSINESS RELOCATION', description: 'We handle the responsibility of moving your business to Cyprus, so you can focus on your business goals.',
            image: Service2
        },
        {
            id: 0,
            title: 'FAMILY RELOCATION',
            description: 'Discover the opportunity to further enhance your business ambitions, by choosing the optimal investment plan.',
            image: Service3
        }
    ]

    
    return (
        <div>
            <div className="ourServices">
                <h3>Our Services</h3>
                <div className="servicesGroup">
                    {
                        services.map(({ id, title, description, image }) => {
                            return <div className="serviceGrp1" key={id}>
                                <img src={image} alt="" />
                                <h4>{title}</h4>
                                <p>{description}</p>
                                <div className="btns">
                                    <NavLink to={"/Services"} className="servBtn">Find Out More</NavLink>
                                </div>

                            </div>

                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default OurServices