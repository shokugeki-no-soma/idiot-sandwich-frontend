import React, { useReducer } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import LoginPage from "./pages/login/login";
import Header from "./components/headers/header";
import loginReducer from "./reducer/appReducer";
import MainAppContainer from "./pages/mainApp/mainAppContainer";
import "./App.css";

const initialState = { login: false };
const initMainPage = { appPage: "RENTER" };
function App() {
  const [state, dispatch] = useReducer(loginReducer, initialState);
  const [pageState, pageDispatch] = useReducer(loginReducer, initMainPage);
  return (
    <Router className="App">
      <Header
        login={state.login}
        dispatch={dispatch}
        pageDispatch={pageDispatch}
      />
      <Switch>
        <PrivateRoute path="/app" login={state.login}>
          <MainAppContainer pageState={pageState.appPage} />
        </PrivateRoute>
        <Route path="/">
          <LoginPage dispatch={dispatch} />
        </Route>
      </Switch>
    </Router>
  );
}
function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        rest.login ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default App;
