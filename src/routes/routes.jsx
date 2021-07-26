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

import InfoAccount from "../pages/InfoAccount";
import InfoCampaign from "../pages/InfoCampaign";
import InfoDonator from "../pages/InfoDonator";
import InfoONG from "../pages/InfoONG"


function AppRoutes() {
  return (
    <BrowserRouter>
      <Switch>
      <Route path="/" exact component={SignInAdministration} />
        <Route path="/usuario"  component={AdministrationPanel} />
        <Route path="/cadastro" component={Cadastro} />
        <Route path="/campanha" component={CampaignAdministration} />

        <Route path="/infoaccount"  component={InfoAccount} />
        <Route path="/infocampaign" component={InfoCampaign} />
        <Route path="/infodonator" component={InfoDonator} />
        <Route path="/infoONG" component={InfoONG} />

        <Route path="/doador" component={DonorAdministration} />
        <Route path="/ong" component={OngAdministration} />
       
        <Route path="/suporte"  component={SupportAdministration} />
        <Route path="/cadastra-campanha" component={RegisterCampaign} />
      </Switch>
    </BrowserRouter>
  );
}

export default AppRoutes;
