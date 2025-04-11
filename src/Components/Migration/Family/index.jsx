import React from 'react'
import FamilyMain from './FamilyMain'
import FamilyHelp from './FamilyHelp'
import FamilyContact from './FamilyContact'
import ScrollToTop from '../../ScrollTop'

const Family = () => {
  return (
    <div>
      <ScrollToTop/>
      <FamilyMain />
      <FamilyHelp />
      <FamilyContact />
    </div>
  )
}

export default Family