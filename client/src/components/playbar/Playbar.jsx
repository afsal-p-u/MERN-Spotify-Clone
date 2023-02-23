import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import {
  CastConnectedOutlined,
  Favorite,
  FeaturedVideoOutlined,
  Mic,
  PauseCircleFilled,
  PlayCircleFilledOutlined,
  Repeat,
  ShuffleOutlined,
  SkipNext,
  SkipPrevious,
  ViewStream,
  VolumeDown,
  VolumeMute,
  VolumeUp
} from '@material-ui/icons'

import './playbar.scss'

const Playbar = () => {

  const [playing, setPlaying] = useState(false)
  const [currentMinute, setCurrentMinute] = useState(0)
  const [currentSecond, setCurrentSecond] = useState(0)
  const [songs, setSongs] = useState(null)
  let [index, setIndex] = useState(0)
  const [length, setLength] = useState(0)
  const [currentSong, setCurrentSong] = useState(null)
  const [volumeLevel, setVolumeLevel] = useState(100)

  const audio = useRef()
  const range = useRef()
  const volumeRef = useRef()

  let current = audio.current?.currentTime
  let duration = audio.current?.duration

  let durationMinute = Math.floor(duration / 60)
  let durationSeconds = Math.floor(duration % 60)

  audio.current?.addEventListener('timeupdate', () => {
    current = audio.current?.currentTime
    setCurrentMinute(Math.floor(current / 60))
    setCurrentSecond(Math.floor(current % 60))

    let width = (current / duration ) * 100
    document.querySelector('.progress').style.width = `${width}%`
  })

  if(current && currentSecond < 10){
    var correctSecond = `0${currentSecond}`
  }else {
    correctSecond = currentSecond
  }

  range.current?.addEventListener('change', () => {
    audio.current.currentTime = (range.current.value * duration) / 100
  })

  // for playing next song
  const nextSong = () => {
    setPlaying(false)
    const indexCount = index + 1
    if(indexCount > length){
      return
    }
    setIndex(index+=1)
    setCurrentSong(songs[index].song)
    setTimeout(() => {
      setPlaying(true)
    }, 1000)
  }
  // for playing previous song
  const prevSong = () => {
    setPlaying(false)
    const indexCount = index - 1
    if(indexCount < 0){
      return
    }
    setIndex(index-=1)
    setCurrentSong(songs[index].song)
    setTimeout(() => {
      setPlaying(true)
    }, 1000)
  }

  // play next song after ending current song
  audio.current?.addEventListener('ended', () => {
    if(index === length){
      setCurrentSong(null) 
      setTimeout(() => {
        setPlaying(false)
      }, 1000)
      return
    }else {
      setPlaying(false)
      setIndex(index+=1)
      setCurrentSong(songs[index].song)
      setTimeout(() => {
        setPlaying(true)
      }, 1000)
    }
  })

  // control play, pause and play, pause buttons
  const control = () => {
    if (playing===false){
      setPlaying(true)
    }else {
      setPlaying(false)
    }
  }

  useEffect(() => {
    playing === true ? (
      audio.current.play()
     ) : (
      audio.current.pause()
     )
  }, [playing])


  const getSongs = async () => {
    await axios.get(`${process.env.REACT_APP_URL}/songs`).then((res) => {
      setSongs(res.data.data)
      setCurrentSong(res.data.data[index].song)
      setLength(res.data.data.length-1)
    }).catch((err) => {
      console.log(err)
    })
  }


  useEffect(() => {
    getSongs()
  }, [])

  // music sound function
  volumeRef.current?.addEventListener('change', () => {
    const vol = volumeRef.current.value
    audio.current.volume = vol / 100
    document.querySelector('.progress-1').style.width = `${vol}%`
    setVolumeLevel(vol)
  })

  return (
    <div className='playbar'>
      <div className="left">
        <div className="image">
          <img src={songs ? songs[index].img : ''} alt="" />
        </div>
        <div className="texts">
          <h4>{songs ? songs[index].name : ''}</h4>
          <small>{songs ? songs[index].artist : ''}</small>
        </div>
        <div className="icons">
          <Favorite className='icon'/>
          <FeaturedVideoOutlined className='icon'/>
        </div>
      </div>
      <div className="center">
        <div className="top">
          <ShuffleOutlined className='center-icon' />
          <SkipPrevious className='center-icon' onClick={prevSong} />
          {playing ? (
            <PauseCircleFilled onClick={control} className='center-icon pause' />
          ): (
            <PlayCircleFilledOutlined onClick={control} className='center-icon pause' />
          )}
          <SkipNext className='center-icon' onClick={nextSong} />
          <Repeat className='center-icon' />
        </div>
        <div className="bottom">
          <span>{current ? currentMinute + ':' + correctSecond : '0:00'}</span>
          <div className="progress-bar">
            <input type="range" min="0" max="100" defaultValue="0" ref={range}/>
            <div className="progress">
              <audio src={songs ? currentSong : ''} ref={audio} type="audio/mpeg"></audio>
            </div>
          </div>
          <span>{duration ? durationMinute + ':' + durationSeconds : '0:00'}</span>
        </div>
      </div>
      <div className="right">
        <Mic className='right-icon' />
        <ViewStream className='right-icon' />
        <CastConnectedOutlined className='right-icon' />
        {volumeLevel > 80 ? (
          <VolumeUp className='right-icon' />
        ): volumeLevel === 0 ? (
          <VolumeMute className='right-icon' />
        ) : (
          <VolumeDown className='right-icon' />
        )}
        <div className="progress-bar1">
          <input type="range" min="0" max="100" ref={volumeRef} />
          <div className="progress-1"></div>
        </div>
      </div>
    </div>
  )
}

export default Playbar