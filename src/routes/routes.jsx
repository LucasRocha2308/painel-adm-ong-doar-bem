import React from "react";
import {BrowserRouter, Switch, Route } from "react-router-dom";
import AdministrationPanel from "../pages/AdministrationPanel";
import CampaignAdministration from "../pages/CampaignAdministration";
import DonorAdministration from "../pages/DonorAdministration";
import OngAdministration from "../pages/OngAdministration";
import InformacoesUsuario from "../pages/Informacoes/informacoes";
import EditarPage from "../components/editarPage/editarDados";
// import AcquisitionAdministration from "../pages/AcquisitionAdministration";
import SupportAdministration from "../pages/SupportAdministration";
import RegisterCampaign from "../pages/RegisterCampaign";

import Cadastro from '../pages/cadastroPage/CadastroPage'


function AppRoutes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={AdministrationPanel} />
        <Route exact path="/cadastro" component={Cadastro} />
        <Route path="/" exact component={AdministrationPanel} />
        <Route path="/campanha" exact component={CampaignAdministration} />
        <Route path="/doador" exact component={DonorAdministration} />
        <Route path="/ong" exact component={OngAdministration} />
        <Route path="/informacoesUser" exact component={InformacoesUsuario} />
        <Route path="/suporte" exact component={SupportAdministration} />
        <Route path="/cadastra-campanha" exact component={RegisterCampaign} />
        <Route path="/editar-cadastro" exact component={EditarPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default AppRoutes;
