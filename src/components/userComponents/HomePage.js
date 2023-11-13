import { Link } from "react-router-dom";
import classes from "./HomePage.module.css";
function HomeUser() {
    return (
        <>
            <div className="container">
            <div className="row mt-5">
                <h1>Welcome to DashBoard</h1>
            </div>
                <div className="row mt-5 gap-2 justify-content-center">
                    <div className="col-xs-6 col-sm-4 col-md-4 col-lg-4 mt-5">
                        <div className="card mx-5 mx-sm-0 mx-md-0 mx-lg-0" >
                            <div class="card-body">
                                <h5 class="card-title"><Link to="upcomingQuizes">Upcoming Quizes </Link></h5>
                                
                            </div>
                        </div>
                    </div>

                    <div className="col-xs-6 col-sm-4 col-md-4 col-lg-4 mt-5">
                        <div className="card mx-5 mx-sm-0 mx-md-0 mx-lg-0" >
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-5 justify-content-center">
                    <div className="col-xs-6 col-sm-4 col-md-4 col-lg-4 ">
                        <div className="card mx-5 mx-sm-0 mx-md-0 mx-lg-0" >
                            <div class="card-body ">
                                <h5 class="card-title">Card title</h5>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomeUser;