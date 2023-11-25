import { useState, useEffect } from 'react';
import axios from 'axios';

const useStudentData = () => {
  const [studentData, setStudentData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchStudentData = async () => {
    try {
      const studentResponse = await axios.get('/api/student');
      setStudentData(studentResponse.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setError('Error fetching student data');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudentData();
  }, []); // Empty dependency array to run the effect only once when the component mounts

  return { studentData, loading, error, refetch: fetchStudentData };
};

export default useStudentData;
