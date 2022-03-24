import { RouteProps, Redirect, Route } from "react-router";
import { useThemeContext } from "../../UserContext";
// import AuthService from "../../services/AuthService";

export const ProtectedRoute = (props: RouteProps) => {
  // const authService = AuthService();
  const authenticationPath = "/";

  const { isLoggedUser } = useThemeContext();

  if (isLoggedUser()) {
    return <Route {...props} />;
  } else {
    return <Redirect to={{ pathname: authenticationPath }} />;
  }
};

export default ProtectedRoute;
