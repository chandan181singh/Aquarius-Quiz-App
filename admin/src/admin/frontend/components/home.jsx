import React from 'react';
import 
{ BsFillPlusSquareFill, BsFillCheckCircleFill, BsPeopleFill, BsGraphUpArrow}
 from 'react-icons/bs'

//  import { Outlet } from 'react-router-dom'
 import {Link} from 'react-router-dom';
 import RecentQuiz from './recentQuiz';
 
function Home() {
  return (
    <main className='main-container'>
        <div className='main-title'>
            <h3>DASHBOARD</h3>
        </div>

        <div className='main-cards'>
            <Link className="link" to='/createQuiz'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Create Quiz</h3>
                    <BsFillPlusSquareFill className='card_icon'/>
                </div>
                <h1>Total Quiz: 6</h1>
            </div>
            </Link>
           
            <div className='card'>
                <Link className="link" to='/student'>
                <div className='card-inner'>
                    <h3>STUDENTS</h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <h1>33</h1>
                </Link>
            </div>
            
            
            
            <div className='card'>
                <Link className="link" to='/availableQuiz'>
                    <div className='card-inner'>
                        <h3>Available Quiz</h3>
                        <BsFillCheckCircleFill className='card_icon'/>
                    </div>
                    <h1>3</h1>
                </Link>
            </div>
           

            
            <div className='card'>
               <Link className="link" to='/reportGraph'>
                <div className='card-inner'>
                    <h3>Report Graph</h3>
                    <BsGraphUpArrow className='card_icon'/>
                </div>
                <h1>7</h1>
                </Link>
            </div>
           
        </div>
        <RecentQuiz /> 
    </main>
  )
}

export default Home