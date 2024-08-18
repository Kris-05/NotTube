import React from 'react'
import './_header.scss'

import { FaBars } from 'react-icons/fa'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdNotifications, MdApps } from 'react-icons/md'

const Header = ({handleToggleSidebar}) => {
  return (
    <div className='header'>
      <FaBars className='header-menu' size={26} onClick={()=>handleToggleSidebar()}/>

      <img src="http://pngimg.com/uploads/youtube/youtube_PNG2.png" alt="Logo" className="header-logo"/>

      <form action="">
        <input type="text" placeholder='Search'/>
        <button type='Submit'>
          <AiOutlineSearch/>
        </button>
      </form>

      <div class="header-icons">
        <MdNotifications size={28}/>
        <MdApps size={28}/>
        <img src="https://img.lovepik.com/element/40143/1122.png_1200.png" alt="Avatar"/>
      </div>
    </div>
  )
}

export default Header
