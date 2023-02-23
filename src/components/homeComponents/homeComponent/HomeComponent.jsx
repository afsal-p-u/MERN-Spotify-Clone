import React from 'react'
import {Pause} from '@material-ui/icons';

import './homeComponent.scss' 
import Img from '../.../../../../assets/images/aintmefault.jpg'

const HomeComponent = ({songs}) => {

  return (
    <div className="home-container">
      <div className="top">
        <h1>Good afternoon</h1>
        <div className="top-list-items">
          <div className="items">
            <div className="left">
              <img src={Img} alt="" />
            </div>
            <div className="center">Liked Songs</div>
            <div className="right">
              <Pause className='pause-icon'/>
            </div>
          </div>
          <div className="items">
            <div className="left">
              <img src={Img} alt="" />
            </div>
            <div className="center">Liked Songs</div>
            <div className="right">
              <Pause className='pause-icon'/>
            </div>
          </div>
          <div className="items">
            <div className="left">
              <img src={Img} alt="" />
            </div>
            <div className="center">Liked Songs</div>
            <div className="right">
              <Pause className='pause-icon'/>
            </div>
          </div>
          <div className="items">
            <div className="left">
              <img src={Img} alt="" />
            </div>
            <div className="center">Liked Songs</div>
            <div className="right">
              <Pause className='pause-icon'/>
            </div>
          </div>
          <div className="items">
            <div className="left">
              <img src={Img} alt="" />
            </div>
            <div className="center">Liked Songs</div>
            <div className="right">
              <Pause className='pause-icon'/>
            </div>
          </div>
          <div className="items">
            <div className="left">
              <img src={Img} alt="" />
            </div>
            <div className="center">Liked Songs</div>
            <div className="right">
              <Pause className='pause-icon'/>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="bottom-up">
          <h4>Made For Afsalpu</h4>
          <small>Show all</small>
        </div>
        <div className="bottom-down">
          {songs?.map((song) => (
            <div className="music-lists">
              <div className="up">
                <img src={song.img} alt="" />
              </div>
              <div className="down">
                <h3>{song.name}</h3>
                <p>{song.artist}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomeComponent