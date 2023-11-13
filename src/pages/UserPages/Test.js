import { useEffect } from "react";
import TestNavBar from "../../components/userComponents/QuizTestUtility/TestNavBar";

function TestPage() {
    let isFullScreen=false;
    const pull_data = (data) => {
        isFullScreen=data; // LOGS DATA FROM CHILD (My name is Dean Winchester... &)
      }
     

    useEffect(()=>{
        console.log(isFullScreen);
        if(isFullScreen){
          
            document.exitFullscreen();
        }
        else{
           
            document.body.requestFullscreen();
        }
    },[isFullScreen])
        return (
            <>
                <TestNavBar func={pull_data}/>
                <h1>Test</h1>
            </>

        );
    }

export default TestPage;