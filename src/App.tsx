import "./App.css";
import Onboarding from "./components/Onboarding/Onboarding";
import { Switch, Route } from "react-router";
// import RecipePage from './components/RecipePage/RecipePage';
import Main from "./components/Main/Main";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import UploadRecipe from "./components/UploadRecipe/UploadRecipe";
import AllScreens from "./components/AllScreens/AllScreens";
import APIService from "./services/API";
import { Provider } from "react-redux";
import { persistor, store } from "./store/rtkStore";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  const apiService = new APIService();
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate persistor={persistor}>
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
            <ProtectedRoute
              path="/main"
              component={() => <Main api={apiService} />}
            />
            <ProtectedRoute
              exact
              path="/upload"
              component={() => <UploadRecipe api={apiService} />}
            />
          </Switch>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
