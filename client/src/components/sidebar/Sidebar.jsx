import React from 'react';

import './sidebar.scss';
import Logo from '../../assets/logo.png'
import {
  AddBox,
  Favorite,
  Home,
  Search,
  ViewList
} from '@material-ui/icons';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="top">
        <div className="top-up">
          <img src={Logo} alt="" />
        </div>
        <div className="top-down">
          <ul>
            <li><Home className='icon active'/><Link to="/" className='active'>Home</Link></li>
            <li><Search className='icon'/><Link to="/search">Search</Link></li>
            <li><ViewList className='icon' /><Link to="/library">Your Library</Link></li>
          </ul>
          <ul>
            <li><AddBox className='icon' /><Link to="/create-playlist">Create Playlist</Link></li>
            <li><Favorite className='icon fav' /><Link to="/liked">Liked Songs</Link></li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="bottom">
        {/* <div className="bottom-up">
          <ul>
            <li><a href="/fav">Fav</a></li>
            <li><a href="/random">Random</a></li>
            <li><a href="/malayalm">Malayalam</a></li>
          </ul>
        </div>
        <div className="bottom-down">
          <button><a href="/install-app">Install App</a></button>
        </div> */}
      </div>
    </div>
  )
}

export default Sidebar