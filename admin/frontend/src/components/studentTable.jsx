// ResponsiveTable.js

import React from 'react';
import '../css/responsiveTable.css';

// DummyData.js

const studentData = [
    { 
      id: 1, 
      name: 'John Doe', 
      registrationNumber: '2021001', 
      emailId: 'john.doe@example.com', 
      semester: 2, 
      branch: 'Computer Science' 
    },
    { 
      id: 2, 
      name: 'Jane Doe', 
      registrationNumber: '2021002', 
      emailId: 'jane.doe@example.com', 
      semester: 3, 
      branch: 'Electrical Engineering' 
    },
    { 
      id: 3, 
      name: 'Bob Smith', 
      registrationNumber: '2021003', 
      emailId: 'bob.smith@example.com', 
      semester: 1, 
      branch: 'Mechanical Engineering' 
    },
    { 
      id: 4, 
      name: 'Alice Johnson', 
      registrationNumber: '2021004', 
      emailId: 'alice.johnson@example.com', 
      semester: 4, 
      branch: 'Civil Engineering' 
    },
    { 
      id: 5, 
      name: 'Charlie Brown', 
      registrationNumber: '2021005', 
      emailId: 'charlie.brown@example.com', 
      semester: 2, 
      branch: 'Chemical Engineering' 
    },
    // Add more dummy data as needed
  ];
  

const StudentTable = () => {
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
                  <tr key={student.id}>
                    <td data-label="ID">{student.id}</td>
                    <td data-label="Name">{student.name}</td>
                    <td data-label="Registration Number">{student.registrationNumber}</td>
                    <td data-label="Email ID">{student.emailId}</td>
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
