import { useEffect, useState } from "react";

function TestNavBar(props) {

    
    const [isFullScreen,setIsFullScreen] =useState(false);

    const fullScreenHandler=()=>{
        if(isFullScreen){
            setIsFullScreen(false);
          
        }
        else{
            setIsFullScreen(true);
     
        }
        
    }

    props.func(isFullScreen);
    return (
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid ">
                <a class="navbar-brand" href="#">Quiz 1</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
       

                <div class="collapse navbar-collapse" id="navbarSupportedContent  ">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li>
                            <button className="btn btn-primary" onClick={fullScreenHandler} >
                                Enter Full Screen
                            </button>
                        </li>

                      
                    </ul>
                   </div>
                </div>
      
        </nav>
    );
}

export default TestNavBar;