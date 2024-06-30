const Card = (props) => {
    return (
        <button className={props.className}>
                    <div className='hp-dont-text'>
                        <div>{props.title}</div>
                        <div>{props.rate}</div>
                    </div>
                </button>
    )
}

export default Card