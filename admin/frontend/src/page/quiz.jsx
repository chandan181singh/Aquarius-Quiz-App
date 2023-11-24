// QuizApp.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const QuizApp = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [timer, setTimer] = useState(300); // 300 seconds = 5 minutes

  useEffect(() => {
    // Fetch quiz questions from the server
    const fetchQuestions = async () => {
      try {
        const response = await axios.get('/api/quiz/questions');
        setQuestions(response.data);
      } catch (error) {
        console.error('Error fetching quiz questions', error);
      }
    };

    fetchQuestions();
  }, []);

  useEffect(() => {
    // Countdown timer logic
    const interval = setInterval(() => {
      setTimer(prevTimer => prevTimer - 1);
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const handleAnswerSubmit = async () => {
    // Submit user answers to the server
    try {
      const response = await axios.post('/api/quiz/submit', {
        answers: userAnswers,
      });
      // Handle response from the server
    } catch (error) {
      console.error('Error submitting answers', error);
    }
  };

  const handleOptionSelect = (selectedOption) => {
    // Update userAnswers state when an option is selected
    setUserAnswers((prevAnswers) => {
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[currentQuestion] = selectedOption;
      return updatedAnswers;
    });

    // Move to the next question
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
  };

  return (
    <div>
      <h1>Quiz App</h1>
      <div>
        {timer > 0 ? (
          <div>
            <p>Time remaining: {timer} seconds</p>
            {currentQuestion < questions.length ? (
              <div>
                <h3>Question {currentQuestion + 1}</h3>
                <p>{questions[currentQuestion].question}</p>
                <ul>
                  {questions[currentQuestion].options.map((option, index) => (
                    <li key={index} onClick={() => handleOptionSelect(option)}>
                      {option}
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div>
                <p>Quiz completed!</p>
                <button onClick={handleAnswerSubmit}>Submit Answers</button>
              </div>
            )}
          </div>
        ) : (
          <p>Time's up! Quiz has ended.</p>
        )}
      </div>
    </div>
  );
};

export default QuizApp;
