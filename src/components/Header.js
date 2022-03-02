function Header (props) {
    return (
        <header className="header">
            <div className="headerLeft">
                <img src="/img/logo.svg" alt="logo"/>
            </div>
            <div className="headerRight">
                <ul className="icon">
                    <li className="iconUser"><img onClick={props.onClickForm} width={35} height={35} src="./img/user.svg"/></li>
                    <li><img onClick={props.onClickCart} width={34} height={34} src="./img/cart.svg"/></li>
                </ul>
            </div>
        </header>
    );
}

export default Header;