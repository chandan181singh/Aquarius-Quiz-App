import ResponsiveTable from './responsiveTable';
import React from 'react';
// import { AiOutlineClose} from "react-icons/ai";
const dummyData = [
    { id: 1, quiz_no: '1', topic: 'Algebra', date_time: '12/12/2022 11:00', result: '#' },
    { id: 2, quiz_no: '2', topic: 'Calculus', date_time: '10/06/2022 11:00', result: '#' },
    { id: 3, quiz_no: '3', topic: 'Co-ordinate Geometry', date_time: '18/04/2022 13:00', result: '#' },
    // Add more dummy data as needed
  ];

function RecentQuiz() {
  return (
    <> 
    <ResponsiveTable tableName="Recent Quiz" data={dummyData}/>
    </>
  )
}

export default RecentQuiz