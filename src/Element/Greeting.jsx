const Greeting = (props) => {

    return (
        <div className="frame-masuk">
                <h3 className="masuk">{props.children1}</h3>
                <p className="selamat">{props.children2}</p>
            </div>
    )
}

export default Greeting