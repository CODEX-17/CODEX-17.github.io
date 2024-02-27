import React from 'react'
import style from './Header.module.css'
import { IoChevronBackSharp } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";


const Header = () => {
  return (
    <div className={style.container}>
          <IoChevronBackSharp size={20} />
          <p>Jaimee Mamuyac</p>
          <FaSearch size={20} style={{ paddingRight: '20px' }}/>
    </div>
  )
}

export default Header