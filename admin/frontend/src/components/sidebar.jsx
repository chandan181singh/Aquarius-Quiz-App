import React from 'react';
import {BsFillBookmarkCheckFill, BsGrid1X2Fill, BsFillPlusSquareFill, BsPeopleFill, 
    BsFillCheckCircleFill, BsGraphUpArrow, BsFillGearFill}
 from 'react-icons/bs';

 import { AiOutlineLogout } from "react-icons/ai";

import {Link} from 'react-router-dom';

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <BsFillBookmarkCheckFill className='icon_header'/> QUIZ
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>
        
        <ul className='sidebar-list'>
            
            <Link className="link" to="/">
                <li className='sidebar-list-item'>
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </li>
            </Link>
        
            <Link className="link" to="/createQuiz">
                <li className='sidebar-list-item'>
                    <BsFillPlusSquareFill className='icon'/> Create Quiz
                </li>
            </Link >

            <Link className="link" to="/student">
                <li className='sidebar-list-item'>
                <BsPeopleFill className='icon'/> Students
                </li>
            </Link>

            <Link className="link" to="/availableQuiz">
                <li className='sidebar-list-item'>
                    <BsFillCheckCircleFill className='icon'/> Available Quiz
                </li>
            </Link>

            <Link className="link" to="/reportGraph">
                <li className='sidebar-list-item'>
                    <BsGraphUpArrow className='icon'/> Reports Graph
                </li>
            </Link>


            <Link className="link" to="/setting">
                <li className='sidebar-list-item'>
                    <BsFillGearFill className='icon'/> Setting
                </li>
            </Link>

            <Link className="link" to="/logout">
                <li className='sidebar-list-item'>
                    <AiOutlineLogout className='icon'/> Logout
                </li>
            </Link >

        </ul>
    </aside>
    
  )
}

export default Sidebar