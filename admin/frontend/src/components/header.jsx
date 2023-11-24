import React from 'react'
import {BsPersonCircle, BsSearch, BsJustify} from 'react-icons/bs'
import { AiOutlineLogout } from "react-icons/ai";

function Header({OpenSidebar}) {
  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
            {/* <BsJustify className='icon' /> */}
        </div>
        <div className='header-left'>
            <BsSearch  className='icon'/>
        </div>
        <div className='header-right'>
            <BsPersonCircle className='icon'/>
            <AiOutlineLogout className='icon'/>
        </div>
    </header>
  )
}

export default Header