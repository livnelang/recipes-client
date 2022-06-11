import { useSelector } from "react-redux";
import { RouteProps, Redirect, Route } from "react-router";
import { RootState } from "../../store/rtkStore";

export const ProtectedRoute = (props: RouteProps) => {
  const authenticationPath = "/";

  const isLoggedUser = useSelector(
    (state: RootState) => state.auth.loggedUser !== null
  );

  if (isLoggedUser) {
    return <Route {...props} />;
  } else {
    return <Redirect to={{ pathname: authenticationPath }} />;
  }
};

export default ProtectedRoute;
