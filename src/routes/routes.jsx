import React from "react";
import {BrowserRouter, Switch, Route } from "react-router-dom";
import AdministrationPanel from "../pages/AdministrationPanel";
// import CampaignAdministration from "../pages/CampaignAdministration";
import DonorAdministration from "../pages/DonorAdministration";
import OngAdministration from "../pages/OngAdministration";
// import AcquisitionAdministration from "../pages/AcquisitionAdministration";
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
        <Route path="/infoaccount" exact component={InfoAccount} />
        <Route path="/infocampaign" exact component={InfoCampaign} />
        <Route path="/infodonator" exact component={InfoDonator} />
        <Route path="/infoONG" exact component={InfoONG} />

        <Route path="/" exact component={AdministrationPanel} />
        <Route exact path="/cadastro" component={Cadastro} />
        <Route path="/" exact component={AdministrationPanel} />
        {/* <Route path="/campanha" exact component={CampaignAdministration} /> */}
        <Route path="/doador" exact component={DonorAdministration} />
        <Route path="/ong" exact component={OngAdministration} />
        {/* <Route path="/aquisicao" exact component={AcquisitionAdministration} /> */}
        <Route path="/suporte" exact component={SupportAdministration} />
        <Route path="/cadastra-campanha" exact component={RegisterCampaign} />
      </Switch>
    </BrowserRouter>
  );
}

export default AppRoutes;
