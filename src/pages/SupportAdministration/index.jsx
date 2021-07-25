import HeaderPanel from "../../components/HeaderPanel";
import MenuLateral from "../../components/MenuLateral";
import ContentCard from "../../components/ContentCard";
import FooterPanel from "../../components/FooterPanel";

import './styles.scss'

const SupportAdministration = () => {
  return (
    <div className="container">
      <HeaderPanel />
      <MenuLateral />
      <ContentCard>
        <div className="support-panel">
          <p className="main-text">Para visualizar todos os contatos recebidos via ChatBot é preciso fazer o login na plataforma Landbot clicando no botão abaixo:</p>
          <button className="chatbot-button">Acessar ChatBot</button>
        </div>
      </ContentCard>
      <FooterPanel />

    </div>
  );
};

export default SupportAdministration;
