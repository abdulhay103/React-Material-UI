import React from "react";
import { Route, Switch } from "react-router";
import Notes from "../Pages/Notes";

const Router = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Notes} />
      </Switch>
    </Router>
  );
};

export default Router;
