import React from 'react'
import SignIn, { Contact } from '../Home/Contact'
import ScrollToTop from '../ScrollTop'

const ContactUs = () => {
  return (
    <div className='gradientBackground'>
      <ScrollToTop/>
      <Contact/>
      <SignIn/>
    </div>
  )
}

export default ContactUs