import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "../Layout/Navbar";
import ButtonUI from "../Pages/ButtonUI";
import TypographyUI from "../Pages/TypographyUI";

const MainRouter = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={TypographyUI} />
        <Route path="/button-ui" component={ButtonUI} />
      </Switch>
    </Router>
  );
};

export default MainRouter;
