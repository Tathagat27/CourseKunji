import React from 'react'
import './Explore.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Explore() {
  return (
    <div className='cont'>
      <div className='explore'>
        Explore Courses
      </div>
      <div className="expand-icon">
          <ExpandMoreIcon />
      </div>
      
    </div>
  )
}

export default Explore
