import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate} from 'react-router-dom'

function AvailableQuiz() {
   
  const [data, setData] = useState([]);
  const [copiedQuizNo, setcopiedQuizNo] = useState(null);
  const navigate = useNavigate();

  const fetchData = useCallback(async()=>{
        try {
          const response = await axios.get('/api/quiz');
          setData(response.data);
          console.log(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
  },[]);

  const handleQuestion = useCallback((selectedQuiz) => {
    navigate('/questions', { state: { data: selectedQuiz } });
  }, [navigate]);

  const handleCopyLink = useCallback((selectedQuiz)=>{
    const url = "http://localhost:3000/";
    const quizLink = url + selectedQuiz.quizNo;
    window.navigator.clipboard.writeText(quizLink);
    console.log(quizLink);
    setcopiedQuizNo(selectedQuiz.quizNo);
  },[])

  useEffect(() =>{
     // Reset copiedRow after showing the popup
     if (copiedQuizNo) {
      setTimeout(() => {
        setcopiedQuizNo(null);
      }, 2000); // Adjust the timeout based on how long you want the popup to be visible
    }
  }, [copiedQuizNo])

  useEffect(() => {
    fetchData();
  },[fetchData]);


  return (
    <main className='main-container'>
     <div className="table-container">
      <h2>Recent Quiz</h2>
      <table>
        <thead>
          <tr>
            <th>Quiz No.</th>
            <th>Topic</th>
            <th>Created Date</th>
            <th>Preview</th>
            <th>Copy Link</th>
          </tr>
        </thead>
        <tbody>
        {data.map((row, index) => (
          row.iSAvailable && 
             ( <tr key={index}>
                <td data-label="quiz_no">{row.quizNo}</td>
                <td data-label="topic">{row.quizName}</td>
                {/* <td data-label="createDate">{new Date(row.createdDate).toLocaleString()}</td> */}
                <td data-label="createdDate">{new Date(row.createdDate).toLocaleString()}</td>
                <td data-label="preview">
                  <button onClick={() => handleQuestion(row)}>
                    View
                  </button>
                </td>
                <td data-label="copyLink">
                  <button onClick={() => handleCopyLink(row)}>
                    CopyLink
                  </button>
                  {
                    copiedQuizNo === row.quizNo &&(
                        <div className="popup">
                            copied!
                        </div>
                    )
                  }
                </td>
              </tr>)
            ))}
        </tbody>
      </table>
    </div>
   </main>
  )
}

export default AvailableQuiz;