import React, { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function Question() {
  const location = useLocation();
  const data = location.state?.data;
  const question = data.questions;
  const [dueDate, setDueDate] = useState(new Date(data.createdDate).toISOString().slice(0, 16));
  const Navigate = useNavigate();
  
  const handleUpdate = useCallback(async()=>{

    try{
      await axios.post('/api/updateDueDate', { id: data._id, updatedDueDate: dueDate },
      {timeout: 100}
      )
      .catch((error)=> console.log("Error is Coming" + error))
      console.log('Quiz data id is at server');
      const dueDateElement =  document.querySelector('#dueDateUpdate');
      dueDateElement.textContent = "updated";
      dueDateElement.style.backgroundColor = "green";
      dueDateElement.style.color = "white";
    }catch(error){
      console.log(error);
    }
    
  }, [dueDate, data._id]);

  const handleDelete = useCallback(async()=>{

    await axios.post('/api/deleteQuiz', {id: data._id}, {
      timeout: 100, // Set the timeout to a longer duration (adjust as needed)
    })
        .then(()=> console.log('Quiz is deleted'))
        .catch((error)=> console.log("Error is Coming" + error))
        Navigate('/')
  }, [data._id, Navigate]);

 
  return (
    <main className='main-container'>
      <h2>Topic: {data.quizName}</h2>
      <div className='quizForm'>
        <h3>Questions List:</h3>
        <ol type="1">
            {question.map((q, index) => (
            <li key={index}>
                <strong>{q.description}</strong>
                <ol type="i">
                {q.options.map((option, i) => (
                    <li key={i}>{option}</li>
                ))}
                </ol>
                <p>Correct Answer: {q.correctAnswer}</p>
                <hr />
            </li>
            
            ))}
        </ol>
      </div>
      
      <label>DueDate:
         <input 
        className='white-calendar-icon'
        type="datetime-local"
        name="date" id="date" 
        value={dueDate}
        onChange={(e)=> setDueDate(e.target.value)}
        />
        <button id="dueDateUpdate" onClick={handleUpdate}>update</button>
        <button id="deleteQuiz" 
        style={{
            backgroundColor: 'red',
            color: 'white',
            margin:'20px',
            fontSize:'1rem'
          }}
          onClick={handleDelete}
         >Delete Quiz</button>
        </label>
        
    </main>
  );
}

export default Question;
