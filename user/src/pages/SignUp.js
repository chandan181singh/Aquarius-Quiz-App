import Header from "../components/FormUtility/Header";
import Signup from "../components/FormUtility/SignUp";

export default function SignupPage(){
    return(
        <>
            <Header
              heading="Signup to create an account"
              paragraph="Already have an account? "
              linkName="LogIn"
              linkUrl="/logIn"
            />
            <Signup/>
        </>
    )
}