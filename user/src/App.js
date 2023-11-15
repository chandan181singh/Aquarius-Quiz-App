import {RouterProvider,createBrowserRouter} from 'react-router-dom'
import './App.css';
//start Landing Page page import
import RootLayout from './pages/Root.js';
import HomePage from './pages/Home.js';
import ContactUsPage from './pages/ContactUs.js';
import AboutUsPage from './pages/AboutUs.js';
import SignupPage from './pages/SignUp.js'
import LoginPage from './pages/Login.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// close Landing page page import

// --start User page import

import RootLayoutUser from './pages/UserPages/RootUser.js';
import HomeUserPage from './pages/UserPages/HomeUser.js';
import UpcomingQuizePage from './pages/UserPages/UpcomingQuizes.js';
import QuizInstruction from './pages/UserPages/QuizInstruction.js';

import TestPage from './pages/UserPages/Test.js';
// --end User page import

const router=createBrowserRouter([
  //start Landing Page route
  {
    path:'/',
    element:<RootLayout/>,

    children:[
      {
        index:true,
        element:<HomePage/>
      },
      {
        path:'about',
        element:<AboutUsPage/>
      },
      {
        path:'contact',
        element:<ContactUsPage/>
      },
      {
        path:'signUp',
        element:<SignupPage/>
      },
      {
        path:'logIn',
        element:<LoginPage/>
      }
    ]
  },
  //end Landing Page route

  // start user route pages

  {
    path:'/user',
    element:<RootLayoutUser/>,
    children:[
      {
        index:true,
        element:<HomeUserPage/>
      },
      {
        path:'upcomingQuizes',
        element:<UpcomingQuizePage/>,
      },
      {
        path:'upcomingQuizes/:quizeName',
        element:<QuizInstruction/>,
      },
      {
        
      }
      
    ]
  },
  {
    path:'/test',
        element:<TestPage/>
  }


])
function App() {
  

      return <RouterProvider router={router} />;
   
}

export default App;
