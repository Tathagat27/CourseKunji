import React from 'react'
import ReactLogo from './vector1.svg'
import './ShortInfo.css'

function ShortInfo() {
  return (
    <div className='description'>
      <div className="desc">
      Are you overwhelmed by the sheer number of online courses available today? Struggling to find the right course that meets your needs and offers value for your time and money? Look no further – <span>Course Kunji</span> is here to revolutionize your online learning experience!
      </div>
      <div className="vectorImg">
        <img src={ReactLogo} alt="image" />
      </div>
    </div>
  )
}

export default ShortInfo
