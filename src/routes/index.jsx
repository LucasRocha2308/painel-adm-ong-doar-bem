import React from "react";
import {BrowserRouter, Switch } from "react-router-dom";
import AdministrationPanel from "../pages/AdministrationPanel";
import CampaignAdministration from "../pages/CampaignAdministration";
import DonorAdministration from "../pages/DonorAdministration";
import OngAdministration from "../pages/OngAdministration";
import SignInAdministration from "../pages/SignInAdministration";
import SupportAdministration from "../pages/SupportAdministration";
import RegisterCampaign from "../pages/RegisterCampaign";
import Cadastro from '../pages/cadastroPage/CadastroPage'
import Route from './route'
import InfoAccount from "../pages/InfoAccount";
import InfoCampaign from "../pages/InfoCampaign";
import InfoDonator from "../pages/InfoDonator";
import InfoONG from "../pages/InfoONG"


function AppRoutes() {
  
  return (
    <BrowserRouter>
      <Switch>
      <Route path="/" exact component={SignInAdministration}  />
        <Route path="/usuario"  component={AdministrationPanel} isPrivate />
        <Route path="/cadastro" component={Cadastro} isPrivate />
        <Route path="/campanha" component={CampaignAdministration} isPrivate />

        <Route path="/infoaccount"  component={InfoAccount} isPrivate/>
        <Route path="/infocampaign" component={InfoCampaign} isPrivate />
        <Route path="/infodonator" component={InfoDonator} isPrivate/>
        <Route path="/infoONG" component={InfoONG} isPrivate/>

        <Route path="/doador" component={DonorAdministration} isPrivate />
        <Route path="/ong" component={OngAdministration} isPrivate/>
       
        <Route path="/suporte"  component={SupportAdministration} isPrivate/>
        <Route path="/cadastra-campanha" component={RegisterCampaign} isPrivate/>
      </Switch>
    </BrowserRouter>
  );
}

export default AppRoutes;
