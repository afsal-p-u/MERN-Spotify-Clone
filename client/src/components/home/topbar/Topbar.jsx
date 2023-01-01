import { AccountCircleRounded, ArrowBackIosRounded, ArrowForwardIosRounded, ExpandMoreRounded } from '@material-ui/icons';
import React from 'react'

import './topbar.scss';

const Topbar = () => {
  return (
    <div className='topbar'>
      <div className="main">
        <div className="topbar-left">
          <ArrowBackIosRounded className='icons' />
          <ArrowForwardIosRounded className='icons' />
        </div>
        <div className="topbar-right">
          <button className='upgrade'>upgrade</button>
          <button className='user'>
            <AccountCircleRounded className='icons' />
              Afsal p u 
            <ExpandMoreRounded className='icons'/>
          </button>
        </div>  
      </div>
    </div>
  )
}

export default Topbar