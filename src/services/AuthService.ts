import { LoggedUser } from "../store/store";

const AuthService = () => {
    const getCurrentUser = () => {
        return localStorage.getItem("user");
    };

    const setCurrentUser = (user: LoggedUser) => {
        localStorage.setItem("user", JSON.stringify(user));
    };

    const isLoggedIn = () => {
        return getCurrentUser() !== null;
    }

    return {
        setCurrentUser: setCurrentUser,
        getCurrentUser: getCurrentUser,
        isLoggedIn: isLoggedIn
    }
}


export default AuthService;