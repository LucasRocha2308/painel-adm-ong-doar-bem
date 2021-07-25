import React from "react";
import {BrowserRouter, Switch, Route } from "react-router-dom";
import AdministrationPanel from "../pages/AdministrationPanel";
import information from "../components/inforPage/inforPage";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={AdministrationPanel} />

        <Route exact path="/information" component={information} />

      </Switch>
    </BrowserRouter>
  );
}

export default AppRoutes;
