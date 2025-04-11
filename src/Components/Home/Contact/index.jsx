import React, { useState } from 'react'
import './style.css'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';
import axios from 'axios';
import EmailJs from '../../EmailJs';


export const Contact = () => {
    return (
        <div>
            <div className="contact">
                <h2>CONTACT US</h2>
                <div className="icon1">
                    <div className="phoneIcon"><FaPhoneAlt /></div>
                    <Link className='phone' to='tel:3579056759'>+3579056759</Link>
                </div>
                <div className="icon2">
                    <div className="mailIcon">< MdEmail /></div>
                    <Link className='mail' to='/contact@pamrelocation.com'>contact@pamrelocation.com</Link>
                </div>
            </div>
        </div>
    )
}


const SignIn = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const userData = {
            name: name,
            email: email,
            subject: subject,
            phone:phone,
            message: message
        };

        try {
            const response = await axios.post('http://localhost:3000/users', userData);
            console.log(response.data);
            setName('');
            setEmail('');
            setSubject('');
            setPhone('');
            setMessage('');
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <div>
            {/* <EmailJs/> */}
            <div className="sign">
                <div className="signIn">
                    <h2>SEND INQUIRY</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="inputs">
                            <div className="inp1">
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder='Your Name'
                                />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder='Email'
                                />
                            </div>
                            <div className="inp2">
                                <input
                                    type="text"
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                    placeholder='Subject'
                                />
                                <input
                                    type="text"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    placeholder='Phone'
                                />
                            </div>
                            <div className="inp3">
                                <textarea
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder='Message'
                                />
                            </div>
                        </div>
                        <div className="inp4">
                            <input type="submit" value="Submit" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;