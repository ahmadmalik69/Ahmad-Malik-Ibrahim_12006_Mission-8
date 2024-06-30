const CardButton = (props) => {
    return (
        <div className="card-button-container">
            <button className={props.className}></button>
            <div className={props.cardHover1}></div>
        </div>
    )
}

export default CardButton