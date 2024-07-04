import { useState } from 'react';
const CardButton = (props) => {
    const [disabled, setDisabled] = useState(false);

    const handleClick = () => {
        setDisabled(true);
        if (props.onClick) {
            props.onClick();
        }
    };
    
    return (
        <div className="card-button-container">
            <button className={props.className}></button>
            <button className={props.cardHover1} onClick={handleClick} disabled={disabled}>+ Daftar Saya</button>
        </div>
    )
}

export default CardButton

