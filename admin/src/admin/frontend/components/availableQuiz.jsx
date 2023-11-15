import React from 'react'
import ResponsiveTable from './responsiveTable';

function AvailableQuiz() {
    const dummyData = [
        { id: 1, quiz_no: '1', topic: 'Probablity', date_time: '12/12/2022 11:00', result: '#' },
        { id: 2, quiz_no: '2', topic: 'Permutation and Combination', date_time: '10/06/2022 11:00', result: '#' },
        { id: 3, quiz_no: '3', topic: 'Matrices', date_time: '18/04/2022 13:00', result: '#' },
        // Add more dummy data as needed
      ];
  return (
    <main className='main-container'>
      <ResponsiveTable tableName="Available Quiz" data={dummyData}/>
    </main>
  )
}

export default AvailableQuiz