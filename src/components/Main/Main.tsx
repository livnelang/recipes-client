// import { Switch, Route } from "react-router";
import { Switch } from "react-router";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import RecipePage from "../RecipePage/RecipePage";
// import RecipePage from "../RecipePage/RecipePage";
// import RecipePage from "../RecipePage/RecipePage";
import RecipesList from "../RecipesList/RecipesList";
// import Seperator from "../Seperator/Seperator";
import "./Main.css";

const Main = () => {
  return (
    <>
      <Header></Header>
      <div className="wrapper">
        <Switch>
          <ProtectedRoute exact path="/main/item/:id" component={RecipePage} />
          <ProtectedRoute exact path="/main/list" component={RecipesList} />
        </Switch>
      </div>
      <Menu />
    </>
  );
};

export default Main;
