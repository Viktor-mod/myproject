import Header from "./Header";

function Overlay ({ onClose, onRemove, items = [] }) {
    return (
        <div className="overlay">
            <div className="cart">
                <h2 className="cartTitle">Корзина <img
                    onClick={onClose}
                    width={24} height={24}
                    src="./img/close.svg" alt="Close"/>
                </h2>

                {items.length > 0 ? ( <div>
                    <div className="products">
                        {items.map((obj) => (
                            <div className="cartItem">
                                <img width={70} height={70} src={obj.imageUrl} alt="sneakers"/>
                                <div className="cartItemProperties">
                                    <p className="cartItemInfo">{obj.title}</p>
                                    <b>{obj.price} ₽</b>
                                </div>
                                <img
                                    onClick={() => onRemove(obj.id)}
                                    className="cartItemButton"
                                    src="./img/delete.svg" alt="delete"/>
                            </div>
                        ))}
                    </div>

                    <ul className="cartTotalBlock">
                        <li className="itemTotalBlock">
                            <span>Итого:</span>
                            <div></div>
                            <b>₽</b>
                        </li>
                    </ul>
                    <button className="cartBtn">Оформить заказ</button>
                </div>) : (<div className="cartEmpty">
                                <img width={100} height={100} src="./img/cartEmpty.svg" alt="Empty"/>
                                <h3>Корзина пустая</h3>
                            </div>
                )}
            </div>
        </div>
    )
}

export default Overlay;
