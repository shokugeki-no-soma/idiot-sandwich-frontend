import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./pages/login/login";
import Header from "./components/headers/header";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/">
          <LoginPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
