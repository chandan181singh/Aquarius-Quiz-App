import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import HomePage from './admin/adminhome';
import App from './page/app'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ReportGraph from './components/reportGraph';
import Home from './components/home';
import StudentTable from './components/studentTable';
import AvailableQuiz from './components/availableQuiz';
import QuizForm from './components/quizForm';
import Questions from './components/questions';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path:"",
        element: <Home />
      },
      {
        path: "availableQuiz",
        element: <AvailableQuiz />
      },
      {
        path: "reportGraph",
        element: <ReportGraph />
      },
      {
        path: "student",
        element: <StudentTable />
      },
      {
        path: "createQuiz",
        element: <QuizForm />
      },
      {
        path: "questions",
        element: <Questions />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <HomePage /> */}
    {/* <App /> */}
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
