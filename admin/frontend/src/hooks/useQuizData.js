import { useState, useEffect } from 'react';
import axios from 'axios';

const useQuizData = () => {
  const [quizData, setQuizData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchQuizData = async () => {
    try {
      const quizResponse = await axios.get('/api/quiz');
      setQuizData(quizResponse.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setError('Error fetching quiz data');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuizData();
  }, []); // Empty dependency array to run the effect only once when the component mounts

  return { quizData, loading, error, refetch: fetchQuizData };
};

export default useQuizData;
