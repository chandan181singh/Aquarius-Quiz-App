import Button_Login from './Button_Login';
import './Button_Login.css'
const Options=()=>{
    return(
        <>
        <div class="h-56 grid grid-cols-5 gap-7 content-start ...">
        <div>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div className='align-content: flex-end;'>
        <Button_Login title={"Login As Student"}></Button_Login>
        <Button_Login title={"Login As Teacher"}></Button_Login>
        </div>
        </div>
        </>
    )
}

export default Options;