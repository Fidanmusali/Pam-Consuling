import React from 'react'
import WhoWeAre from './WhoWeAre'
import WhatWeDo from './WhatWeDo'
import WhatWeDoIt from './WhatWeDoIt'
import Contact2 from './Contact2'
import ScrollToTop from '../ScrollTop'

const AboutUs = () => {
  return (
    <div>
      <ScrollToTop/>
      <WhoWeAre/>
      <WhatWeDo/>
      <WhatWeDoIt/>
      <Contact2/>
    </div>
  )
}

export default AboutUs