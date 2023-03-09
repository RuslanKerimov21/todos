import { useSelector } from "react-redux";
export function useAuth() {
    const { email, token, id, username } = useSelector(state => state.user);
    return {
        isAuth: email,
        username,
        email,
        token,
        id,
    };
}