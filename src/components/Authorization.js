function Authorization (props) {
    return (
        <div className="overlayForm">
            <form className="form">
                <img onClick={props.onCloseForm} width={24} height={24} src="./img/close.svg" alt="Close"/>
                <h1 className="formTitle">Войти</h1>

                <div className="formWrapper">
                    <div className="formItem">
                        <input className="formItemInput" type="text" id="email" placeholder="Введите email"></input>
                    </div>
                    <div className="formItem">
                        <input className="formItemInput" type="password" placeholder="Введите пароль"></input>
                    </div>

                    <div className="wrapperCheckbox">
                        <input className="customCheckbox" type="checkbox" id="checkboxInput" name="checkbox"></input>
                        <label htmlFor="checkboxInput">Оставаться в системе</label>
                    </div>
                </div>
                <div className="formPolicy">Выполняя вход, ты принимаешь
                    <br/><a href="/">Условия использования</a>.</div>
                <button className="formButton">Войти</button>
            </form>
        </div>
    )
}

export default Authorization