/* eslint-disable no-unused-vars */
import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../Home/Home";
import Portal from "../Portal/Portal";
import FourOhFour from "../FourOhFour";

const Routes = () => {
  const renderer = (Component, props) => {
    return <Portal props={props} Component={Component} />;
  };

  return (
    <Switch>
      <Route exact path="/" render={(props) => renderer(Home, props)} />
      <Route path="/:any" render={(props) => renderer(FourOhFour, props)} />
    </Switch>
  );
};

export default Routes;
