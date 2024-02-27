import React from 'react'
import style from './Homepage.module.css'
import Header from '../components/Header'
import Profile from '../components/Profile'
import Info from '../components/Info'
import FriendList from '../components/FriendList'

const Homepage = () => {
  return (
    <div className={style.container}>
        <Header/>
        <Profile/>
        <Info/>
        <FriendList/>
        <div className={style.list}></div>
    </div>
  ) 
}

export default Homepage