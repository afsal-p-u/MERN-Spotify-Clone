import React, { useEffect, useRef, useState } from 'react'
import {
  CastConnectedOutlined,
  Favorite, 
  FeaturedVideoOutlined,
  Mic,
  PauseCircleFilled,
  PlayArrow,
  Repeat,
  ShuffleOutlined,
  SkipNext,
  SkipPrevious,
  ViewStream,
  VolumeDown
} from '@material-ui/icons'

import './playbar.scss'
import Img from '../../assets/aintmefault.jpg'
import Music from '../../assets/aintmefault.mp3'

const Playbar = () => {
 
  const [playing, setPlaying] = useState(false)

  const audio = useRef()

  const control = () => {
    if (playing==false){
      setPlaying(true)
    }else {
      setPlaying(false)
    }
  }

  useEffect(() => {
    playing ? (
      audio.current.play()
     ) : (
      audio.current.pause()
     )
  }, [playing])

  return (
    <div className='playbar'>
      <div className="left">
        <div className="image">
          <img src={Img} alt="" />
        </div>
        <div className="texts">
          <h4>Ain’t My Fault</h4>
          <small>Song by Zara Larsson</small>
        </div>
        <div className="icons">
          <Favorite className='icon'/>
          <FeaturedVideoOutlined className='icon'/>
        </div>
      </div>
      <div className="center">
        <div className="top">
          <ShuffleOutlined className='center-icon' />
          <SkipPrevious className='center-icon' />
          {playing ? (
            <PauseCircleFilled onClick={control} className='center-icon pause' />
          ): (
            <PlayArrow onClick={control} className='center-icon pause' />
          )}
          <SkipNext className='center-icon' />
          <Repeat className='center-icon' />
        </div>
        <div className="bottom">
          <span>0:00</span>
          <div className="progress-bar">
            <div className="progress">
              <audio src={Music} ref={audio} type="audio/mpeg"></audio>
            </div>
          </div>
          <span>0:00</span>
        </div>
      </div>
      <div className="right">
        <Mic className='right-icon' />
        <ViewStream className='right-icon' />
        <CastConnectedOutlined className='right-icon' />
        <VolumeDown className='right-icon' />
        <div className="progress-bar1">
          <div className="progress-1"></div>
        </div>
      </div>
    </div>
  )
}

export default Playbar