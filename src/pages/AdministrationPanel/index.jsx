import HeaderPanel from "../../components/HeaderPanel";
import MenuLateral from "../../components/MenuLateral";
import { goToCadastro, goToInformation } from "../../routes/coodination";

// import ContentCard from "../../components/ContentCard";

import FooterPanel from "../../components/FooterPanel";

import { AiOutlineDown, AiFillDelete, AiOutlineUserAdd } from 'react-icons/ai';

import './styles.scss'
import { useHistory } from "react-router";

const AdministrationPanel = () => {
  const history = useHistory()

  const InformacoesUser = localStorage.getItem("userData");
  const userData = JSON.parse(InformacoesUser);
  const remocerCadastro =  () => {
    localStorage.removeItem("userData")
  }

  return (
    <div className="container">
      <HeaderPanel />
      <MenuLateral />

      {/* <ContentCard> */}
      <div className="main-content-space">
        <div className="main-content">
          <h1>Olá mundo</h1>
          <input type="text" name="search-user" id="search-user" placeholder="Pesquisar Usuário" />
          <div className="users-table">
            <table>
              <tr>
                <th>Nome<AiOutlineDown size={12} className="icon"/></th>
                <th>Função<AiOutlineDown size={12} className="icon"/></th>
                <th>Último Acesso<AiOutlineDown size={12} className="icon"/></th>
                <th><button className="button-page " onClick={() => goToCadastro(history)} ><AiOutlineUserAdd size={22} /></button></th>
              </tr>
              <tr >
                <td><button onClick={() => goToInformation(history)} className="button-page ">{userData.name}</button></td>
                <td>{userData.occupation}</td>
                <td>50</td>
                <td><button className="button-page "onClick={remocerCadastro}><AiFillDelete size={20}/></button></td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      {/* </ContentCard> */}
      <FooterPanel/>

    </div>
  );
};

export default AdministrationPanel;
