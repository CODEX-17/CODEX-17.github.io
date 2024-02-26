import React from 'react'
import style from './Header.module.css'
import { IoChevronBackSharp } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { HiPencil } from "react-icons/hi";
import { FaSearch } from "react-icons/fa";


const Header = () => {
  return (
    <div className={style.container}>
        <IoChevronBackSharp size={25}/>

        <div className={style.horizontal}>
            <p>Jaimee Mamuyac</p>
            <div className={style.badge}>
                9+
            </div>
            <IoMdArrowDropdown size={25}/>

            
        </div>
        <div className={style.horizontal}>
            <HiPencil size={25}/>
            <FaSearch size={25}/>
        </div>
        
    </div>
  )
}

export default Header