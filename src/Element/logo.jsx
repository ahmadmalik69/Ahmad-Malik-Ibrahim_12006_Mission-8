const Logo = (props) => {
    return (
        <div className="logo">
                <h1 className="chill">
                <img src={props.src} alt="movie" className="movie"/>
                    {props.children}
                </h1>
        </div>
    )
}

export default Logo