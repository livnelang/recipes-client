import "./App.css";
import Onboarding from "./components/Onboarding/Onboarding";
import { Switch, Route } from "react-router";
// import RecipePage from './components/RecipePage/RecipePage';
import Main from "./components/Main/Main";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import { useEffect } from "react";
import { useRecoilSnapshot } from "recoil";
import UploadRecipe from "./components/UploadRecipe/UploadRecipe";
import AllScreens from "./components/AllScreens/AllScreens";

export function DebugObserver() {
  const snapshot = useRecoilSnapshot();
  useEffect(() => {
    console.debug("The following atoms were modified:");
    for (const node of Array.from(
      snapshot.getNodes_UNSTABLE({ isModified: true })
    )) {
      console.debug(node.key, snapshot.getLoadable(node));
    }
  }, [snapshot]);

  return null;
}

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Onboarding />
        </Route>
        <Route exact path="/screens">
          <AllScreens />
        </Route>
        {/* <ProtectedRoute
          exact
          path='/main/item/:id'
          component={RecipePage}
        /> */}
        <ProtectedRoute path="/main" component={Main} />
        <ProtectedRoute exact path="/upload" component={UploadRecipe} />
      </Switch>
    </div>
  );
}

export default App;
