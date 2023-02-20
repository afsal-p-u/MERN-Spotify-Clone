import React from 'react'
import {
  AccountCircle,
  ArrowBackIos,
  ArrowDropDown,
  ArrowForwardIos
} from '@material-ui/icons'

import './navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="left">
        <div className="icons">
          <ArrowBackIos className='icon'/>
        </div>
        <div className="icons">
          <ArrowForwardIos className='icon'/>
        </div>
      </div>
      <div className="right">
        <button>Upgrade</button>
        <div className="select-box">
          <AccountCircle className='icon-right'/>
          <button>Afsalpu</button>
          <ArrowDropDown className='icon-right'/>
          {/* open when click select box */}
          <div className="select-lists"></div>
        </div>
      </div>
    </div>
  )
}

export default Navbar