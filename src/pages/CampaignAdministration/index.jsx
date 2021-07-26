import HeaderPanel from "../../components/HeaderPanel";
import MenuLateral from "../../components/MenuLateral";

// import ContentCard from "../../components/ContentCard";

import FooterPanel from "../../components/FooterPanel";

import { AiOutlineDown, AiFillDelete, AiOutlineUserAdd } from 'react-icons/ai';
import azul from '../../assets/img/EllipseAzul.png'
import vermelho from '../../assets/img/EllipseVermelha.png'
import verde from '../../assets/img/EllipseVerde.png'

import './styles.scss'

const CampaignAdministration = () => {
  return (
    <div className="container">
      <HeaderPanel />
      <MenuLateral />

      {/* <ContentCard> */}
      <div className="main-content-space">
        <div className="main-content">
          <h1>Administração de Campanhas</h1>
          <input type="text" name="search-user" id="search-user" placeholder="Pesquisar Usuário" />
          <div className="users-table">
            <table>
              <thead>
                <th>Nome<AiOutlineDown size={12} className="icon" /></th>
                <th>ONG<AiOutlineDown size={12} className="icon" /></th>
                <th>Status<AiOutlineDown size={12} className="icon" /></th>
                <th><AiOutlineUserAdd size={22} /></th>
              </thead>
              <tbody>
                <tr>
                  <td>Campanha Sol</td>
                  <td>Globo</td>
                  <td > <div className="info-separacao"> APROVADA <img src={verde} alt="ellipse verde" /></div></td>
                  <td><AiFillDelete size={20} /></td>
                </tr>
                <tr>
                  <td>Campanha de Sucesso</td>
                  <td>Sempre Feliz</td>
                  <td > <div className="info-separacao"> APROVADA <img src={verde} alt="ellipse verde" /></div></td>
                  <td><AiFillDelete size={20} /></td>
                </tr>
                <tr>
                  <td>Campanha Trabalho Já</td>
                  <td>ONG para todes</td>
                  <td > <div className="info-separacao"> EM ANDAMENTO <img src={azul} alt="ellipse verde" /></div></td>
                  <td><AiFillDelete size={20} /></td>
                </tr>
                <tr>
                  <td>Campanha do Agasalho </td>
                  <td>Juntos somos mais</td>
                  <td > <div className="info-separacao"> RECUSADA <img src={vermelho} alt="ellipse verde" /></div></td>
                  <td><AiFillDelete size={20} /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* </ContentCard> */}
      <FooterPanel />

    </div>
  );
};

export default CampaignAdministration;