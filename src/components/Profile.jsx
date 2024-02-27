import React from 'react'
import style from './Profile.module.css'
import { BsPersonCheckFill } from "react-icons/bs";
import { BiDotsHorizontalRounded } from "react-icons/bi";

const Profile = () => {
  return (
    <div className={style.container}>
        <div className={style.headProfile}>
            <img src='/rumar.jpg' className={style.profilePhoto}/>
            <img src='/cover.jpg' className={style.coverPhoto}/>
        </div>
        <div className={style.nameContent}>
            <div className={style.nameFB}>
                <h2>Rumar Pamparo</h2>
                <p>(Main Account)</p>
            </div>
            <div className={style.nameFB}>
                <h2 id={style.followersH}></h2>
                <p><b>605</b> mutual friends</p>
            </div>
            <p id={style.moto}>The more you know the more you realized you dont know</p>
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