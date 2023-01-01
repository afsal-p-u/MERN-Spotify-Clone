import React from 'react';

import { 
    Home,
    SearchOutlined,
    ViewCarousel,
    AddBoxRounded,
    FavoriteSharp
} from '@material-ui/icons'

import './aside.scss';

import Logo from '../../../assets/logo.png';

const Aside = () => {
  return (
    <div className='aside'>
        <div className="top">
            <img src={Logo} alt="" />
            <ul>
                <li className='li-first'><a href="/"><Home className='icons'/>Home</a></li>
                <li><a href="/search"><SearchOutlined className='icons' />Search</a></li>
                <li><a href="/libary"><ViewCarousel className='icons' />Your Library</a></li>
            </ul>
            <ul>
                <li><a href="#"><AddBoxRounded className='icons' />Create Playlist</a></li>
                <li><a href="#"><FavoriteSharp className='icons' />Liked Songs</a></li>
                <hr />
            </ul>
        </div>
        <div className="bottom"></div>
    </div>
  )
}

export default Aside;