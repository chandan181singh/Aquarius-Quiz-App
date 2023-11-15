import { Link, useParams } from "react-router-dom";
import React from 'react'
import  classes from './QuizInstruction.module.css'

function QuizInstruction() {
  const params=useParams();
    return (
      <React.Fragment>
      <div >
        <p className={`h3 text-start mt-3 b5 ${classes.p}`}>{params.quizeName}</p>
        <p className="text-start">Instructions</p>
        <h3 >Please read the instructions carefully</h3>
        <p>General Instructions:</p>
        <ol className="text-start">
          <li>Total duration of JEE-Main - PAPER 1 EHG 12th Jan SHIFT 1 is 180 min.</li>
          <li>The clock will be set at the server. The countdown timer in the top right corner of screen will display the remaining time available for you to complete the examination. When the timer reaches zero, the examination will end by itself. You will not be required to end or submit your examination.</li>
          <li>
            The Questions Palette displayed on the right side of screen will show the status of each question using one of the following symbols:
            <ol>
              <li>
                 You have not visited the question yet.
              </li>
              <li>
                You have not answered the question.
              </li>
              <li>
                You have answered the question.
              </li>
              <li>
                You have NOT answered the question, but have marked the question for review.
              </li>
              <li>
                The question(s) "Answered and Marked for Review" will be considered for evalution.
              </li>
            </ol>
          </li>
          
        </ol>
        <p className="text-start">Please note all questions will appear in your default language. This language can be changed for a particular question later on.</p>

        <p className="text-start"> I have read and understood the instructions. All computer hardware allotted to me are in proper working condition. I declare that I am not in possession of / not wearing / not carrying any prohibited gadget like mobile phone, bluetooth devices etc. /any prohibited material with me into the Examination Hall.I agree that in case of not adhering to the instructions, I shall be liable to be debarred from this Test and/or to disciplinary action, which may include ban from future Tests / Examinations</p>

        <Link to="/test">
        Proceed
        </Link>
          
        
        </div>
        </React.Fragment>
     );
}

export default QuizInstruction;