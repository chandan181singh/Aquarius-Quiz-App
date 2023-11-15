import { Button } from "bootstrap";
import { Link } from "react-router-dom";
import {useDispatch} from 'react-redux';
import  {modelActions} from'../../store/UserStore/quizModelToggle'
function QuizDetail(props) {
    const dispatch=useDispatch();

    const showModel=()=>{
        dispatch(modelActions.toggleHandler(props.name));
    }
    

    return ( 


            <tbody key={props.key}>
                <tr>
                    <td>
                    {props.srNo}
                    </td>
                    <td><div className="container"  onClick={showModel}>
                    {props.name}
                   </div></td>
                    <td>{props.created}</td>
                    <td>{props.dueDate}</td>
                </tr>
            </tbody>
     );
}

export default QuizDetail;

