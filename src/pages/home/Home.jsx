import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Navbar from '../../components/navbar/Navbar';
import Playbar from '../../components/playbar/Playbar';
import Sidebar from '../../components/sidebar/Sidebar';
import CreatePlaylist from '../../components/homeComponents/createPlaylist/CreatePlaylist'
import HomeComponent from '../../components/homeComponents/homeComponent/HomeComponent'
import Library from '../../components/homeComponents/library/Library'
import LikedSongs from '../../components/homeComponents/likedSongs/LikedSongs'
import Search from '../../components/homeComponents/search/Search'

const Home = () => {
  return (
    <div>
      <div style={{display: "flex"}}>
        <Sidebar />
        <div style={{width: "100%"}}>
          <Navbar />
          {/* <Home /> */}
          <Routes>
            <Route path='/' element={<HomeComponent />} />
            <Route path='/search' element={<Search />} />
            <Route path='/library' element={<Library />} />
            <Route path='/create-playlist' element={<CreatePlaylist />} />
            <Route path='/liked' element={<LikedSongs />} />
          </Routes>
        </div>
      </div>
      <Playbar />
    </div>
  )
}

export default Home