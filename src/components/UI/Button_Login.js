import './Button_Login.css'

const Button_Login=(props)=>{
    return(
        <button className="btn btn-blue">
            {props.title}
        </button>
    )
}

export default Button_Login