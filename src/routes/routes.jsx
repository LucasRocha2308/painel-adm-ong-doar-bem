import React from "react";
import { Switch, Route } from "react-router-dom";
import AdministrationPanel from "../pages/AdministrationPanel";
import CampaignAdministration from "../pages/CampaignAdministration";
import DonorAdministration from "../pages/DonorAdministration";
import OngAdministration from "../pages/OngAdministration";
import AcquisitionAdministration from "../pages/AcquisitionAdministration";
import SupportAdministration from "../pages/SupportAdministration";
import RegisterCampaign from "../pages/RegisterCampaign";

function AppRoutes() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={AdministrationPanel} />
        <Route path="/" exact component={AdministrationPanel} />
        <Route path="/campanha" exact component={CampaignAdministration} />
        <Route path="/doador" exact component={DonorAdministration} />
        <Route path="/ong" exact component={OngAdministration} />
        <Route path="/aquisicao" exact component={AcquisitionAdministration} />
        <Route path="/suporte" exact component={SupportAdministration} />
        <Route path="/cadastra-campanha" exact component={RegisterCampaign} />
      </Switch>
    </>
  );
}

export default AppRoutes;
