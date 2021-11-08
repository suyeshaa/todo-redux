import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import List from "./List";
import Login from "./Login";
import ProtectedRoute from "./ProtectedRoute";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Login} />
        <ProtectedRoute path="/list" component={List} />
      </Switch>
    </div>
  );
};

export default App;
