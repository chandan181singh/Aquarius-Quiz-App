import React, { useState, useEffect } from 'react';
import '../css/quizForm.css';
import { MdDoneAll, MdLibraryAdd } from "react-icons/md";
import {Link} from 'react-router-dom';
// import SuccessPop from './popAnimation';
const QuizForm = () => {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '', '', '']);
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [questionsList, setQuestionsList] = useState([]);

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleAddQuestion = () => {
    if (question && options.every((option) => option !== '') && correctAnswer !== '') {
      const newQuestion = {
        question,
        options,
        correctAnswer,
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

  function addCreatedQuiz(){

  }

  return (
    <main className='main-container'>
    <div className="quizForm">
      <h2>Create Quiz Questions</h2>
      <form>
        <label htmlFor="topic">
          Topic :
          <input type="text" name="topic" id="topic"/>
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
            type="text"
            value={correctAnswer}
            onChange={(e) => setCorrectAnswer(e.target.value)}
          />
        </label> 
        <br /> <br />

        <button type="button" onClick={handleAddQuestion}>
          Add Question &nbsp;
          <MdLibraryAdd className='icon' />
        </button>
      </form>
      
      <br /><br />

      <h3>Questions List:</h3>
      <ol type="1">
        {questionsList.map((q, index) => (
          <li key={index}>
            <strong>{q.question}</strong>
            <ol type="i">
              {q.options.map((option, i) => (
                <li key={i}>{option}</li>
              ))}
            </ol>
            <p>Correct Answer: {q.correctAnswer}</p>
          </li>
        ))}
      </ol>
      <Link to="/"> 
      <div className='done'>
        <button onClick={addCreatedQuiz}>Done <MdDoneAll className='icon'/></button>
      </div>
       </Link>
    </div>
    </main>
  );
};

export default QuizForm;
