import React, {useCallback, useEffect, useState} from 'react';
import 
{ BsFillPlusSquareFill, BsFillCheckCircleFill, BsPeopleFill, BsGraphUpArrow}
 from 'react-icons/bs'

//  import { Outlet } from 'react-router-dom'
 import {Link} from 'react-router-dom';
 import RecentQuiz from './recentQuiz';
 import useQuizData from '../hooks/useQuizData';
 import useStudentData from '../hooks/useStudentData';

 
function Home() {
    const { studentData, studentDataloading, studentDataerror } = useStudentData();
    const { quizData, quizDataloading, quizDataerror } = useQuizData();
    const [availableQuiz, setAvailableQuiz] = useState(0);

    const countAvailableQuiz = useCallback(() => {
        const availableQuizzes = quizData.filter(quiz => quiz.iSAvailable);
        setAvailableQuiz(availableQuizzes.length);
      }, [quizData]);
    
      useEffect(() => {
        countAvailableQuiz();
      }, [countAvailableQuiz]);

      if (studentDataloading) {
        return <div>studentDataloading...</div>;
      }else if(quizDataloading) {
        return <div>quizDataloading...</div>;
      }else if(studentDataerror){
        return <div>Error: {studentDataerror}</div>;
      }else if(quizDataerror){
        return <div>Error: {studentDataerror}</div>;
      }

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
                <h1>Total Quiz: {quizData.length}</h1>
            </div>
            </Link>
           
            <div className='card'>
                <Link className="link" to='/student'>
                <div className='card-inner'>
                    <h3>STUDENTS</h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <h1>{studentData.length}</h1>
                </Link>
            </div>
            
            
            
            <div className='card'>
                <Link className="link" to='/availableQuiz'>
                    <div className='card-inner'>
                        <h3>Available Quiz</h3>
                        <BsFillCheckCircleFill className='card_icon'/>
                    </div>
                    <h1>{availableQuiz}</h1>
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