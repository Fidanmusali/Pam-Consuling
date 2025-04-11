import React from 'react'
import BusinessMain from './BusinessMain'
import BusinessHelp from './BusinessHelp'
import BusinessContact from './BusinessContact'
import ScrollToTop from '../../ScrollTop'

const Business = () => {
  return (
    <div>
      <ScrollToTop/>
      <BusinessMain/>
      <BusinessHelp/>
      <BusinessContact/>
    </div>
  )
}

export default Business