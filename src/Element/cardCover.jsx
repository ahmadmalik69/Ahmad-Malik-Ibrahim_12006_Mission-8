import CardButton from "./cardButton"

const CardCover = (props) => {
    return (
        <div className='hp-top-rating'>
                <h3 className='hp-top-text'>{props.title}</h3>
                <div className='hp-top-rating-component'>
                    <CardButton className={props.card1} cardHover1={props.cardHover1}></CardButton>
                    <CardButton className={props.card2}></CardButton>
                    <CardButton className={props.card3}></CardButton>
                    <CardButton className={props.card4}></CardButton>
                    <CardButton className={props.card5}></CardButton>
                </div>
        </div>
    )
}

export default CardCover