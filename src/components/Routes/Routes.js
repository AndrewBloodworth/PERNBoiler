/* eslint-disable no-unused-vars */
import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../views/Home/Home";
import Portal from "../interface/Portal/Portal";
import FourOhFour from "../views/FourOhFour";

const Routes = ({ open }) => {
  const renderer = (Component, props) => {
    return <Portal {...{ Component, open, props }} />;
  };

  return (
    <Switch>
      <Route exact path="/" render={(props) => renderer(Home, props)} />
      <Route path="/:any" render={(props) => renderer(FourOhFour, props)} />
    </Switch>
  );
};

export default Routes;
