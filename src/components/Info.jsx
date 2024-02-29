import React from 'react'
import style from './Info.module.css'
import { MdSchool } from "react-icons/md";
import { FaHouse } from "react-icons/fa6";
import { MdFamilyRestroom } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { FaFaceAngry } from "react-icons/fa6";

const Info = () => {
  return (
    <div className={style.container}>
        <div className={style.boundary}>ds</div>
        <div className={style.header}>
            <button className={style.btnChannelActive}>Posts</button>
            <button className={style.btnChannel}>Photos</button>
        </div>
        <div className={style.infoLayout}>
            <h2>Details</h2>
            <p><FaHouse size={15} color='gray'/> Lives in <b>Navarro, Cavite</b></p>
            <p><MdFamilyRestroom size={15} color='gray'/> Spouse of <b>Rumar Pamparo</b></p>
            <p><FaFaceAngry size={15} color='gray'/> Certified <b>Mood Swing</b></p>
            <p><FaHeart size={15} color='gray'/> In a relationship with <b>Rumar Mabait</b></p>
            <p><MdSchool size={18} color='gray'/> Studied at <b>Edi Sa Puso Ni Rumar</b></p>
        </div>
    </div>
  )
}

export default Info