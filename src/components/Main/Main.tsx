import { Switch } from "react-router";
import APIService from "../../services/API";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import RecipePage from "../RecipePage/RecipePage";
import RecipesList from "../RecipesList/RecipesList";
import "./Main.css";

interface Props {
  api: APIService;
}

const Main = (props: Props) => {
  return (
    <>
      <Header></Header>
      <div className="wrapper">
        <Switch>
          <ProtectedRoute exact path="/main/item/:id" component={RecipePage} />
          <ProtectedRoute
            exact
            path="/main/list"
            component={() => <RecipesList api={props.api} />}
          />
        </Switch>
      </div>
      <Menu />
    </>
  );
};

export default Main;
