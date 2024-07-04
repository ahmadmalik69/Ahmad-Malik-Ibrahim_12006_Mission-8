import CardButton from "./cardButton";

const CardCover = (props) => {
    return (
        <div className='hp-top-rating'>
            <h3 className='hp-top-text'>{props.title}</h3>
            <div className='hp-top-rating-component'>
                <CardButton className={props.card1} onClick={props.onClick} disabled={props.isButtonClicked} />
                <CardButton className={props.card2} onClick={props.onClick} disabled={props.isButtonClicked} />
                <CardButton className={props.card3} onClick={props.onClick} disabled={props.isButtonClicked} />
                <CardButton className={props.card4} onClick={props.onClick} disabled={props.isButtonClicked} />
                <CardButton className={props.card5} onClick={props.onClick} disabled={props.isButtonClicked} />
            </div>
        </div>
    )
}

export default CardCover;
