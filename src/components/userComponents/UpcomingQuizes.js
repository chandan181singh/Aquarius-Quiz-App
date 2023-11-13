import QuizDetail from "./QuizDetail";
import Modal from "./UI/Modal";
import { useSelector } from 'react-redux';

const Dummy_Quizes=[
    {
        id:1,
        name:"Quiz1",
        Creted_Date:"11 Nov 2023 8:10AM",
        Due_Date:"18 Nov 2023 9:00Am"
        
    },
    {
        id:2,
        name:"Quiz2",
        Creted_Date:"11 Nov 2023 8:10AM",
        Due_Date:"18 Nov 2023 9:00Am"
        
    },
    {
        id:3,
        name:"Quiz3",
        Creted_Date:"11 Nov 2023 8:10AM",
        Due_Date:"18 Nov 2023 9:00Am"
        
    },
    {
        id:4,
        name:"Quiz4",
        Creted_Date:"11 Nov 2023 8:10AM",
        Due_Date:"18 Nov 2023 9:00Am"
        
    }
]

function UpcomingQuizes() {
    const isShow=useSelector(state=>state.modal.isShow);
    return ( 
        <div className="container mt-5">
            <table className="table">
            <thead>
                <tr>
                <th>Sr.No.</th>
                <th>Name</th>
                <th>Created Date</th>
                <th>Due Date</th>
                </tr>
                </thead>
                {   
                    Dummy_Quizes.map((data)=>
                    {
                    return(
                    <QuizDetail key={data.id} srNo={data.id} name={data.name} created={data.Creted_Date}
                    dueDate={data.Due_Date}></QuizDetail>
                        )
                })}
           

            </table>
            {isShow && <Modal></Modal>}
        </div>
     );
}

export default UpcomingQuizes;