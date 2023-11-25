import React, { useState, useEffect } from 'react';
import '../css/quizForm.css';
import { MdDoneAll, MdLibraryAdd } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// import SuccessPop from './popAnimation';
const QuizForm = () => {
  const [question, setQuestion] = useState('');
  const [quizName, setQuizName] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [options, setOptions] = useState(['', '', '', '']);
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [questionsList, setQuestionsList] = useState([]);

  const navigate = useNavigate();

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleAddQuestion = () => {
    if (question && options.every((option) => option !== '') && correctAnswer !== '') {
      const newQuestion = {
        description: question,
        options: options,
        correctAnswer: correctAnswer,
      };
      setQuestionsList([...questionsList, newQuestion]);
      // Clear form fields for the next question
      setQuestion('');
      setOptions(['', '', '', '']);
      setCorrectAnswer('');
    } else {
      alert('Please fill in all fields before adding a question.');
    }
  };

  useEffect(() => {
    // Update the height of the textarea based on its content
    const textareaElements = document.querySelectorAll('textarea');
    textareaElements.forEach((textarea) => {
      textarea.style.height = '1rem';
      textarea.style.height = `${textarea.scrollHeight}px`;
    });
  }, [question]);

  const addCreatedQuiz = async(e)=>{
     e.preventDefault();
      
      try{
        const quiz = {
          quizName: quizName,
          questions: questionsList,
          createdDate: new Date(),
          dueDate: dueDate,
        }  
        await axios.post('/api/quizData', quiz, {timeout: 100})
          .then(()=>  console.log("data is sent to server"))
          .catch((error)=>console.log("Error : "+error))
          navigate('/')
        
      }catch(error){
        console.log(error);
      }
  }

  return (
    <main className='main-container'>
    <div className="quizForm">
      <h2>Create Quiz Questions</h2>
      <form onSubmit={addCreatedQuiz}>
        <label htmlFor="topic">
          Topic :
          <input
          type="text"
          name="topic"
          id="topic"
          value={quizName}
          onChange={(e) => setQuizName(e.target.value)}
          />
        </label>
        <br /><br /><br />
        <label htmlFor="questionId">Question:</label>
        <textarea
          id="questionId"
          className="question"
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <br /> <br />

        <label>
          Options:
          <ol type="i" className="option">
          {options.map((option, index) => (
              <li key={index}>
                <input
                  name={`option${index}`}
                  type="text"
                  value={option}
                  onChange={(e) => handleOptionChange(index, e.target.value)}
                />
              </li>
            ))}
          </ol>
        </label>
        <br />

        <label>
          Correct Answer:
          <input
            name='correctAnswer'
            type="number"
            value={correctAnswer}
            onChange={(e) => setCorrectAnswer(e.target.value)}
          />
        </label> 
        <br /> <br />

        <button type="button" onClick={handleAddQuestion}>
          Add Question &nbsp;
          <MdLibraryAdd className='icon' />
        </button>
      
      <br /><br />

      <h3>Questions List:</h3>
      <ol type="1">
        {questionsList.map((q, index) => (
          <li key={index}>
            <strong>{q.description}</strong>
            <ol type="i">
              {q.options.map((option, i) => (
                <li key={i}>{option}</li>
              ))}
            </ol>
            <p>Correct Answer: {q.correctAnswer}</p>
          </li>
        ))}
      </ol>
      <label htmlFor="topic">
          Due Date
          <input
          className='white-calendar-icon'
          type="datetime-local"
          name="eventDateTime"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          />
        </label>
      <div className='done'>
        <button type='submit'> Done <MdDoneAll className='icon'/></button>
      </div>
      </form>
    </div>
    </main>
  );
};

export default QuizForm;
