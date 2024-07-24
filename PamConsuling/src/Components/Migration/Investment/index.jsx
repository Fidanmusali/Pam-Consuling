import React from 'react'
import InvestmentMain from './InvestmentMain'
import InvestmentHelp from './InvestmentHelp'
import InvestmentContact from './InvestmentContact'
import ScrollToTop from '../../ScrollTop'

const Investment = () => {
  return (
    <div>
      <ScrollToTop/>
      <InvestmentMain />
      <InvestmentHelp />
      <InvestmentContact/>

    </div>
  )
}

export default Investment