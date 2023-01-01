import React from 'react'
import Aside from '../../components/home/aside/Aside';
import Container from '../../components/home/container/Container';
import Favourite from '../../components/home/favourite/Favourite';
import Topbar from '../../components/home/topbar/Topbar';

import './home.scss';

export const Home = () => {
  return (
    <div className='home'>
        <div className="left">
            <Aside />
        </div>
        <div className="right">
            <Topbar />
            <div className="container">
                <h1>Good Afternoon</h1>
                <Favourite />
            </div>
            {/* <Container /> */}
        </div>
    </div>
  )
}
