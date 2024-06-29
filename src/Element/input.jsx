import '../Halaman/Login/login.css'
const Input = (props) => {
    return (
        <div>
        <p className={props.className}>{props.children}</p>
        <input type={props.type} placeholder={props.placeholder} className="usernameButton"/>
        </div>
    )
}

export default Input