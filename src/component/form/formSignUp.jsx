import { useState } from "react"
const FormsSignUp = ({ title, trigerController }) => {
    const [email, setEmail] = useState();
    const [name, setName] = useState();
    const [pass, setPass] = useState();
    return (
        <>
            <div className="form-wrapper">
                <div className="form-text">
                    Добро пожаловать в список дел, войдите в аккаунт или создайте его
                </div>
                <div className="fom-controls">
                    <div className="input">
                        <input
                            type="text"
                            placeholder="Введите имя"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="input">
                        <input
                            type="email"
                            placeholder="Логин"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="input">
                        <input
                            type="password"
                            placeholder="Пароль"
                            onChange={(e) => setPass(e.target.value)}
                        />
                    </div>
                    <div className="form-send">
                        <button className="form-button" onClick={() => trigerController(name, email, pass)}>
                            {title}
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
export { FormsSignUp }