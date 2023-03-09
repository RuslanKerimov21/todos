import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { FormsSignIn } from "../form/formSignIn";
import Messages from '../errors/Message';
import { setUser } from "../../store/reducer/userReducer";
const Login = () => {
    const auth = getAuth();
    const history = useNavigate();
    const dispatch = useDispatch();
    const [message, setMessage] = useState()
    const handleLogin = async (email, password) => {
        if (!email && !password) {
            setMessage('Введите данные')
            return;
        };
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                    username: user.displayName,
                }));
                localStorage.setItem('email', JSON.stringify(email))
                localStorage.setItem('username', JSON.stringify(user.displayName))
                history('/')
            })
            .catch((error) => {
                console.log(error)
            });
    }
    return (
        <>
            {message && (
                <div className="message-wrap">
                    <Messages
                        error={message}
                    />
                </div>
            )}
            <FormsSignIn
                title="Войти"
                trigerController={handleLogin}
            />
        </>
    )
}
export { Login }