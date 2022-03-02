import React, {useState} from 'react'

function Card ({ imageUrl, price, title, onPlus }) {
    const [isAdded, setIsAdded] = React.useState(false)

    const onClickAdd = () => {
        onPlus({ imageUrl, price, title });
        setIsAdded(!isAdded);
    };

    return (
        <div className="card">
            <img width={220} height={220} src={imageUrl} alt="sneakers"/>
            <h3 className="cardTitle">{price} ₽</h3>
            <div>
                <p>{title}</p>
            </div>
            {/*<button className="cardButton" onClick={props.onClickAdd}>В корзину</button>*/}
            <img onClick={onClickAdd} className="cardButton" src={isAdded ? "./img/onChecked.svg" : "./img/onCart.svg"} alt="onCart"/>
        </div>
    );
}

export default Card;
