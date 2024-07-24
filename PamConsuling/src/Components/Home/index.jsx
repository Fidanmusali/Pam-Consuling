import './style.css'
import React from 'react'
import Header from './Header'
import OurServices from './OurServices'
import Paradise from './Paradise'
import Cyprus from './Cyprus'
import Who from './Who'
import Happen from './Happen'
import SignIn, { Contact } from './Contact'
import Patners from './Patners'

const Home = () => {
  return (
    <div>
    
      <Header />
      <OurServices />
      <Paradise />
      <Cyprus />
      <Who />
      <Happen />
      <div className='gradientBackground'>
        <Contact />
        <SignIn />
      </div>
      <Patners />
    </div>
  )
}

export default Home