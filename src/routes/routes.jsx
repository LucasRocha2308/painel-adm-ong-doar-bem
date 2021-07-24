import React from "react";
import { Switch, Route } from "react-router-dom";
import AdministrationPanel from "../pages/AdministrationPanel";

function AppRoutes() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={AdministrationPanel} />
      </Switch>
    </>
  );
}

export default AppRoutes;
