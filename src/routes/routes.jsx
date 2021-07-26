import React from "react";
import {BrowserRouter, Switch, Route } from "react-router-dom";
import AdministrationPanel from "../pages/AdministrationPanel";
import CampaignAdministration from "../pages/CampaignAdministration";
import DonorAdministration from "../pages/DonorAdministration";
import OngAdministration from "../pages/OngAdministration";
import SignInAdministration from "../pages/SignInAdministration";
import SupportAdministration from "../pages/SupportAdministration";
import RegisterCampaign from "../pages/RegisterCampaign";

import Cadastro from '../pages/cadastroPage/CadastroPage'



function AppRoutes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/usuario" exact component={AdministrationPanel} />
        <Route exact path="/cadastro" component={Cadastro} />
        {/* <Route path="/" exact component={AdministrationPanel} /> */}
        <Route path="/campanha" exact component={CampaignAdministration} />
        <Route path="/doador" exact component={DonorAdministration} />
        <Route path="/ong" exact component={OngAdministration} />
        <Route path="/" exact component={SignInAdministration} />
        <Route path="/suporte" exact component={SupportAdministration} />
        <Route path="/cadastra-campanha" exact component={RegisterCampaign} />
      </Switch>
    </BrowserRouter>
  );
}

export default AppRoutes;
