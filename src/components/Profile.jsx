import React from 'react'
import style from './Profile.module.css'
import { BsPersonCheckFill } from "react-icons/bs";
import { BiDotsHorizontalRounded } from "react-icons/bi";

const Profile = () => {
  return (
    <div className={style.container}>
        <div className={style.headProfile}>
            <img src='/dp.jpg' className={style.profilePhoto}/>
            <img src='/fb_cover.jpg' className={style.coverPhoto}/>
        </div>
        <div className={style.nameContent}>
            <div className={style.nameFB}>
                <h2>Jaimee Mamuyac</h2>
                <p>(Mimay)</p>
            </div>
            <div className={style.nameFB}>
                <h2 id={style.followersH}></h2>
                <p><b>1.2k</b> mutual friends</p>
            </div>
            <p id={style.moto}>Ako GIRLFRIEND kaya ako lagi tama!!</p>
        </div>
        <div className={style.lowerBtn}>
            <button><BsPersonCheckFill/> Friends</button>
            <button style={{ backgroundColor: '#0866ff', color: 'white' }}>Message</button>
            <div id={style.dots}><BiDotsHorizontalRounded/></div>
        </div>
    </div>
  )
}

export default Profile