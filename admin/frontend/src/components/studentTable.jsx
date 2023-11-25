// ResponsiveTable.js

import React from 'react';
import '../css/responsiveTable.css';
import useStudentData from '../hooks/useStudentData';

const StudentTable = () => {
  const { studentData, loading, error } = useStudentData();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    
    <main className='main-container'>
      <div className="table-container">
          <h2>Students Details</h2>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Registration Number</th>
                  <th>Email ID</th>
                  <th>Semester</th>
                  <th>Branch</th>
                </tr>
              </thead>
              <tbody>
                {studentData.map((student) => (
                  <tr key={student.studentId}>
                    <td data-label="ID">{student.studentId}</td>
                    <td data-label="Name">{student.name}</td>
                    <td data-label="Registration Number">{student.registrationNo}</td>
                    <td data-label="Email ID">{student.email}</td>
                    <td data-label="Semester">{student.semester}</td>
                    <td data-label="Branch">{student.branch}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
    </main>
  );
};

export default StudentTable;
