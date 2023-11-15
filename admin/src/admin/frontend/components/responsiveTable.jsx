// ResponsiveTable.js

import React from 'react';
import '../css/responsiveTable.css';

const ResponsiveTable = ({ tableName, data }) => {
  return (
    <div className="table-container">
      <h2>{tableName}</h2>
      <table>
        <thead>
          <tr>
            <th>Quiz No.</th>
            <th>Topic</th>
            <th>Date and Time</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td data-label="quiz_no">{row.quiz_no}</td>
              <td data-label="topic">{row.topic}</td>
              <td data-label="date_time">{row.date_time}</td>
              <td data-label="Result"><a href={`/${row.result}`}>View</a> <a href={`/${row.result}`}>Assign</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResponsiveTable;
