import React, { useEffect, useState } from 'react'
import style from './Homepage.module.css'
import Header from '../components/Header'
import Profile from '../components/Profile'
import Info from '../components/Info'
import FriendList from '../components/FriendList'
import { FaUserFriends } from "react-icons/fa"
import { BiSolidRightArrow } from "react-icons/bi"
import { GrLike } from "react-icons/gr"
import { FaRegComment } from "react-icons/fa"
import { PiShareFatLight } from "react-icons/pi"
import { PiMessengerLogo } from "react-icons/pi"
import { BsThreeDots } from "react-icons/bs"
import { HiHome } from "react-icons/hi"
import { PiVideo } from "react-icons/pi"
import { LiaUserFriendsSolid } from "react-icons/lia"
import { GrNotification } from "react-icons/gr"


const Homepage = () => {

  const [count, setCount] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [sinceFirst, setsinceFirst] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
  
    const startDate = new Date('2023-09-05')
    const startFirstDate = new Date('2020-12-11')
    const currentDate = new Date()
    const differenceInSeconds = (currentDate - startDate) / 1000
    const differenceInSecondsfirst = (currentDate - startFirstDate) / 1000

    const intervalId = setInterval(() => {
      const days = Math.floor(differenceInSeconds / (60 * 60 * 24))
      const hours = Math.floor((differenceInSeconds % (60 * 60 * 24)) / (60 * 60))
      const minutes = Math.floor((differenceInSeconds % (60 * 60)) / 60)
      const seconds = Math.floor(differenceInSeconds % 60)
      const months = Math.floor(days / 30);
      setCount({ days: days % 30, hours, minutes, seconds, months });
    }, 1000)

    const intervalIds = setInterval(() => {
      const days = Math.floor(differenceInSecondsfirst / (60 * 60 * 24))
      const hours = Math.floor((differenceInSecondsfirst % (60 * 60 * 24)) / (60 * 60))
      const minutes = Math.floor((differenceInSecondsfirst % (60 * 60)) / 60)
      const seconds = Math.floor(differenceInSecondsfirst % 60)
      const months = Math.floor(days / 30);
      setsinceFirst({ days: days % 30, hours, minutes, seconds, months });
    }, 1000)

    return () => clearInterval(intervalId, intervalIds)

  }, [])

  return (
    <div className={style.container}>
        <Header/>
        <Profile/>
        <Info/>
        <FriendList/>
        <div className={style.bodyList}>
            <div className={style.post}>
                <div className={style.sections}>sad</div>
                <div className={style.head}>
                  <div className={style.horizontal}>
                    <img src='/cover.jpg'/>
                    <div className={style.vertical}>
                      <h2>Rumar Pamparo <BiSolidRightArrow size={10} color='gray'/> Rumar Pamparo</h2>
                      <p>Feb 16 <FaUserFriends/></p>
                    </div>
                  </div>
                  <BsThreeDots style={{ marginRight: '10px' }}/>
                </div>
                <div className={style.body}>
                  <p>
                    {count.months} months, {count.days} days, {count.hours} hours, {count.minutes} minutes, {count.seconds} seconds
                  </p>

                  <p>
                    {sinceFirst.months} months, {sinceFirst.days} days, {sinceFirst.hours} hours, {sinceFirst.minutes} minutes, {sinceFirst.seconds} seconds
                  </p>
                  <div className={style.footer}>
                    <div className={style.horizontal}>
                      <GrLike/>
                      Like
                    </div>
                    <div className={style.horizontal}>
                      <FaRegComment/>
                      Comment
                    </div>
                    <div className={style.horizontal}>
                      <PiMessengerLogo/>
                      Send
                    </div>
                    <div className={style.horizontal}>
                      <PiShareFatLight/>
                      Share
                    </div>

                  </div>
                </div>
            </div>

            <div className={style.post}>
                <div className={style.sections}>sad</div>
                <div className={style.head}>
                  <div className={style.horizontal}>
                    <img src='/cover.jpg'/>
                    <div className={style.vertical}>
                      <h2>Rumar Pamparo <BiSolidRightArrow size={10} color='gray'/> Rumar Pamparo</h2>
                      <p>Feb 16 <FaUserFriends/></p>
                    </div>
                  </div>
                  <BsThreeDots style={{ marginRight: '10px' }}/>
                </div>
                <div className={style.body}>
                  this is hotdog
                  <img src='/cover.jpg' />
                  <div className={style.footer}>
                    <div className={style.horizontal}>
                      <GrLike/>
                      Like
                    </div>
                    <div className={style.horizontal}>
                      <FaRegComment/>
                      Comment
                    </div>
                    <div className={style.horizontal}>
                      <PiMessengerLogo/>
                      Send
                    </div>
                    <div className={style.horizontal}>
                      <PiShareFatLight/>
                      Share
                    </div>

                  </div>
                </div>
            </div>

            <div className={style.post}>
                <div className={style.sections}>sad</div>
                <div className={style.head}>
                  <div className={style.horizontal}>
                    <img src='/cover.jpg'/>
                    <div className={style.vertical}>
                      <h2>Rumar Pamparo <BiSolidRightArrow size={10} color='gray'/> Rumar Pamparo</h2>
                      <p>Feb 16 <FaUserFriends/></p>
                    </div>
                  </div>
                  <BsThreeDots style={{ marginRight: '10px' }}/>
                </div>
                <div className={style.body}>
                  this is hotdog
                  <div className={style.footer}>
                    <div className={style.horizontal}>
                      <GrLike/>
                      Like
                    </div>
                    <div className={style.horizontal}>
                      <FaRegComment/>
                      Comment
                    </div>
                    <div className={style.horizontal}>
                      <PiMessengerLogo/>
                      Send
                    </div>
                    <div className={style.horizontal}>
                      <PiShareFatLight/>
                      Share
                    </div>

                  </div>
                </div>
            </div>

            <div className={style.post}>
                <div className={style.sections}>sad</div>
                <div className={style.head}>
                  <div className={style.horizontal}>
                    <img src='/cover.jpg'/>
                    <div className={style.vertical}>
                      <h2>Rumar Pamparo <BiSolidRightArrow size={10} color='gray'/> Rumar Pamparo</h2>
                      <p>Feb 16 <FaUserFriends/></p>
                    </div>
                  </div>
                  <BsThreeDots style={{ marginRight: '10px' }}/>
                </div>
                <div className={style.body}>
                  this is hotdog
                  <div className={style.footer}>
                    <div className={style.horizontal}>
                      <GrLike/>
                      Like
                    </div>
                    <div className={style.horizontal}>
                      <FaRegComment/>
                      Comment
                    </div>
                    <div className={style.horizontal}>
                      <PiMessengerLogo/>
                      Send
                    </div>
                    <div className={style.horizontal}>
                      <PiShareFatLight/>
                      Share
                    </div>

                  </div>
                </div>
            </div>

            <div className={style.post}>
                <div className={style.sections}>sad</div>
                <div className={style.head}>
                  <div className={style.horizontal}>
                    <img src='/cover.jpg'/>
                    <div className={style.vertical}>
                      <h2>Rumar Pamparo <BiSolidRightArrow size={10} color='gray'/> Rumar Pamparo</h2>
                      <p>Feb 16 <FaUserFriends/></p>
                    </div>
                  </div>
                  <BsThreeDots style={{ marginRight: '10px' }}/>
                </div>
                <div className={style.body}>
                  this is hotdog
                  <div className={style.footer}>
                    <div className={style.horizontal}>
                      <GrLike/>
                      Like
                    </div>
                    <div className={style.horizontal}>
                      <FaRegComment/>
                      Comment
                    </div>
                    <div className={style.horizontal}>
                      <PiMessengerLogo/>
                      Send
                    </div>
                    <div className={style.horizontal}>
                      <PiShareFatLight/>
                      Share
                    </div>

                  </div>
                </div>
            </div>

            <div className={style.post}>
                <div className={style.sections}>sad</div>
                <div className={style.head}>
                  <div className={style.horizontal}>
                    <img src='/cover.jpg'/>
                    <div className={style.vertical}>
                      <h2>Rumar Pamparo <BiSolidRightArrow size={10} color='gray'/> Rumar Pamparo</h2>
                      <p>Feb 16 <FaUserFriends/></p>
                    </div>
                  </div>
                  <BsThreeDots style={{ marginRight: '10px' }}/>
                </div>
                <div className={style.body}>
                  this is hotdog
                  <div className={style.footer}>
                    <div className={style.horizontal}>
                      <GrLike/>
                      Like
                    </div>
                    <div className={style.horizontal}>
                      <FaRegComment/>
                      Comment
                    </div>
                    <div className={style.horizontal}>
                      <PiMessengerLogo/>
                      Send
                    </div>
                    <div className={style.horizontal}>
                      <PiShareFatLight/>
                      Share
                    </div>

                  </div>
                </div>
            </div>

            <div className={style.sections}>sad</div>
        </div>

        <div className={style.footerMenu}>
          <div className={style.verticalMenuIcons}>
            <HiHome size={25} color={'rgb(8, 102, 255)'}/>
            Home
          </div>
          <div className={style.verticalMenuIcons}>
            <PiVideo size={25}/>
            Video
          </div>
          <div className={style.verticalMenuIcons}>
            <LiaUserFriendsSolid size={25}/>
            Friends
          </div>
          <div className={style.verticalMenuIcons}>
            <GrNotification size={25}/>
            Notification
          </div>

          <div className={style.verticalMenuIcons}>
            <img src='/cover.jpg'/>
            Menu
          </div>
          
        </div>
    </div>
  ) 
}

export default Homepage