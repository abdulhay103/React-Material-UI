import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "../Layout/Navbar";
import Create from "../Pages/Create";
import Notes from "../Pages/Notes";

const MainRouter = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Notes} />
        <Route exact path="/create" component={Create} />
      </Switch>
    </Router>
  );
};

export default MainRouter;
